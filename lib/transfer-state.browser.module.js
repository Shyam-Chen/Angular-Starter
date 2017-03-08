import { NgModule } from '@angular/core';
import { TransferState } from './transfer-state';
export function getTransferState() {
    var transferState = new TransferState();
    transferState.initialize(window[('TRANSFER_STATE')] || {});
    return transferState;
}
var BrowserTransferStateModule = (function () {
    function BrowserTransferStateModule() {
    }
    return BrowserTransferStateModule;
}());
export { BrowserTransferStateModule };
BrowserTransferStateModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: TransferState, useFactory: getTransferState }
                ]
            },] },
];
/** @nocollapse */
BrowserTransferStateModule.ctorParameters = function () { return []; };
