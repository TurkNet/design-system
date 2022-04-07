"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
tslib_1.__exportStar(require("./Tab"), exports);
tslib_1.__exportStar(require("./TabPanel"), exports);
const Tabs = ({ children, fullWidth }) => {
    return react_1.default.createElement(styled_1.TabsStyled, { fullWidth: fullWidth }, children);
};
exports.Tabs = Tabs;
