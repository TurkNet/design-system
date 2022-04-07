"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Badge = (_a) => {
    var { label, children, variant = 'fill', color = 'primary' } = _a, props = tslib_1.__rest(_a, ["label", "children", "variant", "color"]);
    return (react_1.default.createElement(styled_1.BadgeStyled, Object.assign({}, props, { variant: variant, color: color }), label || children));
};
exports.Badge = Badge;
