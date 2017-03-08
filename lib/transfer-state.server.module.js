import { NgModule } from '@angular/core';
import { TransferState } from './transfer-state';
var ServerTransferStateModule = (function () {
    function ServerTransferStateModule() {
    }
    return ServerTransferStateModule;
}());
export { ServerTransferStateModule };
ServerTransferStateModule.decorators = [
    { type: NgModule, args: [{
                providers: [TransferState]
            },] },
];
/** @nocollapse */
ServerTransferStateModule.ctorParameters = function () { return []; };
