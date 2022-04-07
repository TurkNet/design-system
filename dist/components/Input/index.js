"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
exports.Input = react_1.default.forwardRef((_a, ref) => {
    var { variant = 'primary', onClickIcon, icon } = _a, props = tslib_1.__rest(_a, ["variant", "onClickIcon", "icon"]);
    return (react_1.default.createElement(styled_1.WrapperStyled, null,
        react_1.default.createElement(styled_1.InputStyled, Object.assign({}, props, { variant: variant, ref: ref })),
        icon && react_1.default.createElement(styled_1.IconStyled, { onClick: onClickIcon }, icon)));
});
