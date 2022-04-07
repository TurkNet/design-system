"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Box = (_a) => {
    var { hidden } = _a, props = tslib_1.__rest(_a, ["hidden"]);
    if (hidden) {
        return null;
    }
    return react_1.default.createElement(styled_1.BoxStyled, Object.assign({}, props));
};
exports.Box = Box;
