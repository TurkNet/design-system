"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Tooltip = (_a) => {
    var { children, variant = 'topCenter', title } = _a, props = tslib_1.__rest(_a, ["children", "variant", "title"]);
    return (react_1.default.createElement(styled_1.TooltipStyled, Object.assign({}, props, { variant: variant, "data-tooltip": title }), children));
};
exports.Tooltip = Tooltip;
