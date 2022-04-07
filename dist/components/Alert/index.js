"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Alert = (_a) => {
    var { severity = 'info', children } = _a, props = tslib_1.__rest(_a, ["severity", "children"]);
    return (react_1.default.createElement(styled_1.AlertStyled, Object.assign({ severity: severity }, props), children));
};
exports.Alert = Alert;
