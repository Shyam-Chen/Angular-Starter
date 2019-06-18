import { Injectable } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

@Injectable()
export class RoutingCacheService implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return 'detach' in route.data ? route.data.detach : false;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    RoutingCacheService.handlers[this.getRoutePath(route)] = handle;
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!RoutingCacheService.handlers[this.getRoutePath(route)];
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) return null;
    if (route.routeConfig.loadChildren) return null;
    return RoutingCacheService.handlers[this.getRoutePath(route)];
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }

  private getRoutePath(route: ActivatedRouteSnapshot): string {
    let namedOutletCount: number = 0;

    const namedRoutes = route.pathFromRoot.reduce((path, curRoute) => {
      const config = curRoute.routeConfig;

      if (config) {
        if (config.outlet) {
          path += `(${config.outlet}:`;
          namedOutletCount += 1;
        } else {
          path += '/';
        }

        return path += config.path;
      }

      return path;
    }, '');

    return namedRoutes + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : '');  // tslint:disable-line
  }
}
