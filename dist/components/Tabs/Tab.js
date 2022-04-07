"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utility_1 = require("../../utility");
const styled_1 = require("./styled");
const Tab = (_a) => {
    var { label, children, tabId, currentTabId, onClick = utility_1.noop } = _a, props = tslib_1.__rest(_a, ["label", "children", "tabId", "currentTabId", "onClick"]);
    return (react_1.default.createElement(styled_1.TabStyled, Object.assign({ isActive: currentTabId === tabId, onClick: () => onClick(tabId) }, props), label || children));
};
exports.Tab = Tab;
