"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Tag = (_a) => {
    var { label, children, variant = 'fill', color = 'primary', icon } = _a, props = tslib_1.__rest(_a, ["label", "children", "variant", "color", "icon"]);
    return (react_1.default.createElement(styled_1.TagStyled, Object.assign({}, props, { variant: variant, color: color }),
        react_1.default.createElement("span", null, label || children),
        icon));
};
exports.Tag = Tag;
