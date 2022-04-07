"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const ButtonGroup = ({ size = 'large', color = 'primary', variant = 'fill', children, }) => {
    const childrenWithProps = react_1.default.Children.map(children, child => {
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, Object.assign({ size,
                variant,
                color }, child.props));
        }
        return child;
    });
    return (react_1.default.createElement(styled_1.ButtonGroupStyled, { variant: variant, color: color }, childrenWithProps));
};
exports.ButtonGroup = ButtonGroup;
