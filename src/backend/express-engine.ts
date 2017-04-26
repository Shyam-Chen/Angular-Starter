import * as fs from 'fs';
import { Request, Response, Send } from 'express';
import { Provider, NgModuleFactory, NgModuleRef, PlatformRef, ApplicationRef, Type } from '@angular/core';
import { ɵgetDOM } from '@angular/platform-browser';
import { platformServer, platformDynamicServer, PlatformState, INITIAL_CONFIG } from '@angular/platform-server';

import { TransferState } from '../shared/transfer-state';

const templateCache: { [key: string]: string } = {};

export interface NgSetupOptions {
  aot?: boolean;
  bootstrap: Type<{}>[] | NgModuleFactory<{}>[];
  providers?: any[];
  onBootstrapEnd?: (module: NgModuleRef<{}>) => NgModuleRef<{}>;
}

export interface PlatformOptions {
  document: string;
  req: Request;
  res: Response;
  aot: boolean;
  providers: Provider[];
}

export function ngExpressEngine(setupOptions: NgSetupOptions) {

  return function (filePath, options: { req: Request, res: Response }, callback: Send) {
    try {
      const moduleFactory = setupOptions.bootstrap[0];

      if (!moduleFactory) {
        throw new Error('You must pass in a NgModule or NgModuleFactory to be bootstrapped');
      }

      if (!setupOptions.aot) {
        throw new Error('Not supported yet');
      }

      const platformConfig: PlatformOptions = {
        document: getDocument(filePath),
        req: options.req,
        res: options.res,
        aot: setupOptions.aot,
        providers: setupOptions.providers || []
      };

      const platform: PlatformRef = getPlatformServer(platformConfig);

      const moduleRefPromise: Promise<NgModuleRef<{}>> = setupOptions.aot ?
        platform.bootstrapModuleFactory(<NgModuleFactory<{}>>moduleFactory) :
        platform.bootstrapModule(<Type<{}>>moduleFactory);

      moduleRefPromise.then((moduleRef: NgModuleRef<{}>) => {
        handleModuleRef(moduleRef, callback, platform);
      });

    } catch (e) {
      callback(e);
    }
  };
}

/**
 * Get the document at the file path
 */
function getDocument(filePath: string): string {
  return templateCache[filePath] = templateCache[filePath] || fs.readFileSync(filePath).toString();
}

/**
 * Handle the request with a given NgModuleRef
 */
function handleModuleRef(moduleRef: NgModuleRef<{}>, callback: Send, platform: PlatformRef) {
  const state = moduleRef.injector.get(PlatformState);
  const appRef = moduleRef.injector.get(ApplicationRef);

  appRef.isStable
    .filter((isStable: boolean) => isStable)
    .first()
    .subscribe((stable) => {
      injectCache(moduleRef);

      callback(null, state.renderToString());
      platform.destroy();
    });
}

// I can't think of a way not to make a new one each time since we have to pass the url in here
/**
 * Gets a PlatformRef with the given initial config, compilation state, and extra providers.
 */
function getPlatformServer(
  platformOptions: PlatformOptions
): PlatformRef {
  const extraProviders = platformOptions.providers.concat([
    {
      provide: INITIAL_CONFIG,
      useValue: {
        document: platformOptions.document,
        url: platformOptions.req.url
      }
    },
    {
      provide: 'REQUEST',
      useValue: platformOptions.req
    },
    {
      provide: 'RESPONSE',
      useValue: platformOptions.res
    }
  ]);
  return platformOptions.aot ?
    platformServer(extraProviders) :
    platformDynamicServer(extraProviders);
}

/**
 * Inject the Universal Cache into the bottom of the <head>
 */
function injectCache(moduleRef: NgModuleRef<{}>) {
  try {
    const transferState = moduleRef.injector.get(TransferState);
    const state = moduleRef.injector.get(PlatformState);
    const document: any = state.getDocument();
    const dom = ɵgetDOM();
    const script: HTMLScriptElement = <HTMLScriptElement> dom.createElement('script');
    const transferStateString = JSON.stringify(transferState.toJson());
    dom.setText(script, `window['TRANSFER_STATE'] = ${transferStateString}`);
    const body = dom.querySelector(document, 'body');
    dom.appendChild(body, script);
  } catch (e) {
    console.error(e);
  }
}
