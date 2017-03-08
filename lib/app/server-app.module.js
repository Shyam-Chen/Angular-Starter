import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../transfer-state.server.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
var ServerAppModule = (function () {
    function ServerAppModule() {
    }
    return ServerAppModule;
}());
export { ServerAppModule };
ServerAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [AppComponent],
                imports: [
                    ServerModule,
                    ServerTransferStateModule,
                    AppModule
                ]
            },] },
];
/** @nocollapse */
ServerAppModule.ctorParameters = function () { return []; };
