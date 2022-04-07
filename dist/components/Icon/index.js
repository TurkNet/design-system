"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Icon = (_a) => {
    var { name, size = 24, color, outlined, cursor } = _a, props = tslib_1.__rest(_a, ["name", "size", "color", "outlined", "cursor"]);
    const cs = outlined ? '-outlined' : '';
    return (react_1.default.createElement(styled_1.IconStyled, Object.assign({ className: `custom-icons material-icons${cs}`, fontSize: size, color: color, cursor: cursor }, props), name));
};
exports.Icon = Icon;
