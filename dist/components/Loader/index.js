"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearLoader = exports.CircleLoader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const CircleLoader = ({ main, size = 48, color = 'primary.normal', }) => {
    if (main) {
        return (react_1.default.createElement(styled_1.MainStyled, null,
            react_1.default.createElement(styled_1.CircleStyled, { color: color })));
    }
    return react_1.default.createElement(styled_1.CircleStyled, { size: size, color: color });
};
exports.CircleLoader = CircleLoader;
const LinearLoader = () => {
    return react_1.default.createElement(styled_1.LinearStyled, null);
};
exports.LinearLoader = LinearLoader;
