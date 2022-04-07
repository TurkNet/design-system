"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
exports.Radio = react_1.default.forwardRef((_a, ref) => {
    var { variant = 'standart', children } = _a, props = tslib_1.__rest(_a, ["variant", "children"]);
    return (react_1.default.createElement(styled_1.LabelStyled, null,
        react_1.default.createElement(styled_1.RadioStyled, Object.assign({ type: "radio" }, props, { variant: variant, ref: ref })),
        react_1.default.createElement("span", null, children)));
});
