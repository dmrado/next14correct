'use client';
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
var react_1 = require("react");
var TickTak = function () {
    var _a = (0, react_1.useState)(0), index = _a[0], setIndex = _a[1];
    var _b = (0, react_1.useState)([]), message = _b[0], setMessage = _b[1];
    // const numData = Array.from({length: 10}, (_, index) => index + 1);
    // console.log(numData);
    (0, react_1.useEffect)(function () {
        var ticker = function (num, duration) {
            if (num === void 0) { num = 10; }
            if (duration === void 0) { duration = 1000; }
            var _loop_1 = function (i) {
                setTimeout(function () {
                    setMessage(function (prevMessages) { return __spreadArray(__spreadArray([], prevMessages, true), ["Tic ".concat(i)], false); }); //prevMessages в функции обновления состояния является частью стандартного API хуков состояния в React. Когда вы вызываете функцию обновления состояния, переданную через useState, вы можете передать ей функцию, а не конкретное значение. Эта функция получит текущее значение состояния в качестве аргумента, что позволяет вам обновить состояние на основе предыдущего значения.
                }, duration * i);
            };
            for (var i = 0; i < num; i++) {
                _loop_1(i);
            }
        };
        ticker();
        export {};
    }, []);
    return { message: message } < />;
};
exports.default = TickTak;
