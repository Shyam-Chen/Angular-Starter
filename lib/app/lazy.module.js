import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
var LazyView = (function () {
    function LazyView() {
    }
    return LazyView;
}());
export { LazyView };
LazyView.decorators = [
    { type: Component, args: [{
                selector: 'lazy-view',
                template: "<h3>i'm lazy</h3>"
            },] },
];
/** @nocollapse */
LazyView.ctorParameters = function () { return []; };
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
export { LazyModule };
LazyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LazyView],
                imports: [
                    RouterModule.forChild([
                        { path: '', component: LazyView, pathMatch: 'full' }
                    ])
                ]
            },] },
];
/** @nocollapse */
LazyModule.ctorParameters = function () { return []; };
