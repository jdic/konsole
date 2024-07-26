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
var Colors_1 = require("./constants/Colors");
var log = function (tag) {
    var message = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        message[_i - 1] = arguments[_i];
    }
    var time = new Date().toLocaleTimeString();
    var color = Colors_1.Colors[tag.toLowerCase()];
    var reset = Colors_1.Colors.reset;
    var cyan = Colors_1.Colors.cyan;
    console.log.apply(console, __spreadArray(["".concat(color, "[").concat(tag, "] ").concat(cyan, "[").concat(time, "]").concat(reset)], message, false));
};
var warn = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log.apply(void 0, __spreadArray(['WARN'], message, false));
};
exports.warn = warn;
var fail = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log.apply(void 0, __spreadArray(['FAIL'], message, false));
};
exports.fail = fail;
var info = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log.apply(void 0, __spreadArray(['INFO'], message, false));
};
exports.info = info;
var succ = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return log.apply(void 0, __spreadArray(['SUCC'], message, false));
};
exports.succ = succ;
