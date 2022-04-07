"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_components_1 = require("styled-components");
const theme_1 = require("./shared/theme");
const global_1 = require("./shared/global");
const ThemeProvider = ({ children }) => {
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(global_1.GlobalStyle, null),
            children)));
};
exports.ThemeProvider = ThemeProvider;
