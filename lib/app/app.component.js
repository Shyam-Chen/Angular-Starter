import { Component } from '@angular/core';
import { TransferState } from '../transfer-state';
var AppComponent = (function () {
    function AppComponent(cache) {
        this.cache = cache;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cache.set('cached', true);
    };
    return AppComponent;
}());
export { AppComponent };
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
<<<<<<< HEAD
                template: "\n    <h1>Universal Web Application</h1>\n    <a routerLink=\"/\">Home</a>\n    <a routerLink=\"/about\">About</a>\n    <router-outlet></router-outlet>\n  "
=======
                template: "\n    <h1>Universal Web Application</h1>\n    <a routerLink=\"/\">Home</a>\n    <a routerLink=\"/lazy\">Lazy</a>\n    <router-outlet></router-outlet>\n  "
>>>>>>> dc4570b... 211th Commit
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: TransferState, },
]; };
