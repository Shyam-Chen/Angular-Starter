import { Injectable } from '@angular/core';
var TransferState = (function () {
    function TransferState() {
        this._map = new Map();
    }
    TransferState.prototype.keys = function () {
        return this._map.keys();
    };
    TransferState.prototype.get = function (key) {
        return this._map.get(key);
    };
    TransferState.prototype.set = function (key, value) {
        return this._map.set(key, value);
    };
    TransferState.prototype.toJson = function () {
        var _this = this;
        var obj = {};
        Array.from(this.keys())
            .forEach(function (key) {
            obj[key] = _this.get(key);
        });
        return obj;
    };
    TransferState.prototype.initialize = function (obj) {
        var _this = this;
        Object.keys(obj)
            .forEach(function (key) {
            _this.set(key, obj[key]);
        });
    };
    return TransferState;
}());
export { TransferState };
TransferState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransferState.ctorParameters = function () { return []; };
