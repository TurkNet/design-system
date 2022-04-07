"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPanel = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = require("../Box");
const TabPanel = (_a) => {
    var { children, tabId, currentTabId } = _a, props = tslib_1.__rest(_a, ["children", "tabId", "currentTabId"]);
    return (react_1.default.createElement(Box_1.Box, Object.assign({ pt: 24 }, props, { hidden: currentTabId !== tabId }), children));
};
exports.TabPanel = TabPanel;
