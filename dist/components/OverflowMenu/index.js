"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenuItem = exports.OverflowMenu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const OverflowMenuItem_1 = tslib_1.__importDefault(require("./OverflowMenuItem"));
exports.OverflowMenuItem = OverflowMenuItem_1.default;
const styled_1 = require("./styled");
const OverflowMenu = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    return react_1.default.createElement(styled_1.OverflowMenuStyled, Object.assign({}, props), children);
};
exports.OverflowMenu = OverflowMenu;
