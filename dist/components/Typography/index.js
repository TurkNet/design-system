"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    paragraph1: 'p',
    paragraph2: 'p',
    caption1: 'span',
    caption2: 'span',
    label: 'label',
    span: 'span',
};
const Typography = (_a) => {
    var { variant = 'paragraph1', children, cursor } = _a, props = tslib_1.__rest(_a, ["variant", "children", "cursor"]);
    return (react_1.default.createElement(styled_1.TypographyStyled, Object.assign({ as: tags[variant], variant: variant, cursor: cursor }, props), children));
};
exports.Typography = Typography;
