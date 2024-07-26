"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.succ = exports.info = exports.fail = exports.warn = void 0;
require("colors");
var log = function (tag, message) {
    return console.log.apply(console, __spreadArray([tag], message, false));
};
var warn = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log('[WARN]'.yellow, message);
};
exports.warn = warn;
var fail = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log('[FAIL]'.red, message);
};
exports.fail = fail;
var info = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log('[INFO]'.blue, message);
};
exports.info = info;
var succ = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log('[SUCC]'.green, message);
};
exports.succ = succ;
