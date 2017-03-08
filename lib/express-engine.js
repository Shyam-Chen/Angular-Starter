import * as fs from 'fs';
import { ApplicationRef } from '@angular/core';
import { ɵgetDOM } from '@angular/platform-browser';
import { platformServer, platformDynamicServer, PlatformState, INITIAL_CONFIG } from '@angular/platform-server';
import { TransferState } from './transfer-state';
var templateCache = {};
export function ngExpressEngine(setupOptions) {
    return function (filePath, options, callback) {
        try {
            var moduleFactory = setupOptions.bootstrap[0];
            if (!moduleFactory) {
                throw new Error('You must pass in a NgModule or NgModuleFactory to be bootstrapped');
            }
            if (!setupOptions.aot) {
                throw new Error('Not supported yet');
            }
            var platformConfig = {
                document: getDocument(filePath),
                req: options.req,
                res: options.res,
                aot: setupOptions.aot,
                providers: setupOptions.providers || []
            };
            var platform_1 = getPlatformServer(platformConfig);
            var moduleRefPromise = setupOptions.aot ?
                platform_1.bootstrapModuleFactory(moduleFactory) :
                platform_1.bootstrapModule(moduleFactory);
            moduleRefPromise.then(function (moduleRef) {
                handleModuleRef(moduleRef, callback, platform_1);
            });
        }
        catch (e) {
            callback(e);
        }
    };
}
/**
 * Get the document at the file path
 */
function getDocument(filePath) {
    return templateCache[filePath] = templateCache[filePath] || fs.readFileSync(filePath).toString();
}
/**
 * Handle the request with a given NgModuleRef
 */
function handleModuleRef(moduleRef, callback, platform) {
    var state = moduleRef.injector.get(PlatformState);
    var appRef = moduleRef.injector.get(ApplicationRef);
    appRef.isStable
        .filter(function (isStable) { return isStable; })
        .first()
        .subscribe(function (stable) {
        injectCache(moduleRef);
        callback(null, state.renderToString());
        platform.destroy();
    });
}
// I can't think of a way not to make a new one each time since we have to pass the url in here
/**
 * Gets a PlatformRef with the given initial config, compilation state, and extra providers.
 */
function getPlatformServer(platformOptions) {
    var extraProviders = platformOptions.providers.concat([
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
function injectCache(moduleRef) {
    try {
        var transferState = moduleRef.injector.get(TransferState);
        var state = moduleRef.injector.get(PlatformState);
        var document_1 = state.getDocument();
        var dom = ɵgetDOM();
        var script = dom.createElement('script');
        var transferStateString = JSON.stringify(transferState.toJson());
        dom.setText(script, "window['TRANSFER_STATE'] = " + transferStateString);
        var body = dom.querySelector(document_1, 'body');
        dom.appendChild(body, script);
    }
    catch (e) {
        console.error(e);
    }
}
