"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifNotProp = exports.switchProp = exports.prop = exports.ifProp = exports.propColor = exports.color = exports.opacity = exports.space = exports.borderRadius = exports.fontWeight = exports.fontSize = exports.themeMulti = exports.alphaColor = exports.themeColor = void 0;
const tslib_1 = require("tslib");
const color_1 = tslib_1.__importDefault(require("color"));
const styled_tools_1 = require("styled-tools");
Object.defineProperty(exports, "ifProp", { enumerable: true, get: function () { return styled_tools_1.ifProp; } });
Object.defineProperty(exports, "prop", { enumerable: true, get: function () { return styled_tools_1.prop; } });
Object.defineProperty(exports, "switchProp", { enumerable: true, get: function () { return styled_tools_1.switchProp; } });
Object.defineProperty(exports, "ifNotProp", { enumerable: true, get: function () { return styled_tools_1.ifNotProp; } });
const themeColor = (variant) => ({ color, severity, theme: t, }) => {
    return styled_tools_1.theme(`colors.${[color || severity, variant].filter(i => i).join('.')}`, color || severity)({
        theme: t,
    });
};
exports.themeColor = themeColor;
const alphaColor = (alpha) => (color) => {
    try {
        return color_1.default(color).alpha(alpha);
    }
    catch (error) {
        return color;
    }
};
exports.alphaColor = alphaColor;
const themeMulti = (path, values) => (props) => {
    return values.map(r => styled_tools_1.theme(`${path}.${r}`, r)(props)).join(' ');
};
exports.themeMulti = themeMulti;
const fontSize = (size) => styled_tools_1.theme(`fontSizes.${size}`);
exports.fontSize = fontSize;
const fontWeight = (weight) => styled_tools_1.theme(`fontWeights.${weight}`);
exports.fontWeight = fontWeight;
const borderRadius = (...radius) => {
    return exports.themeMulti('borderRadius', radius);
};
exports.borderRadius = borderRadius;
const space = (...space) => {
    return exports.themeMulti('space', space);
};
exports.space = space;
const opacity = (opaticy) => styled_tools_1.theme(`opacity.${opaticy}`);
exports.opacity = opacity;
const color = (color, alpha = 1) => {
    return styled_tools_1.withProp(`theme.colors.${color}`, exports.alphaColor(alpha));
};
exports.color = color;
const propColor = (variant = '', alpha = 1) => {
    return styled_tools_1.withProp(exports.themeColor(variant), exports.alphaColor(alpha));
};
exports.propColor = propColor;
