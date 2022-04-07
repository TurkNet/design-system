"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Button = (_a) => {
    var { size = 'large', variant = 'fill', color = 'primary', children, icon, value, alignment = 'right' } = _a, props = tslib_1.__rest(_a, ["size", "variant", "color", "children", "icon", "value", "alignment"]);
    return (react_1.default.createElement(styled_1.ButtonStyled, Object.assign({}, props, { size: size, variant: variant, color: color, alignment: alignment }),
        react_1.default.createElement("span", null, value || children),
        icon));
};
exports.Button = Button;
