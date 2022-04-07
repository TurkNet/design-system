"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Icon_1 = require("../Icon");
const styled_1 = require("./styled");
const OverflowMenuItem = (_a) => {
    var { children, icon, active } = _a, props = tslib_1.__rest(_a, ["children", "icon", "active"]);
    return (react_1.default.createElement(styled_1.OverflowMenuItemStyled, Object.assign({}, props),
        icon,
        children && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styled_1.OverflowLabel, null, children),
            active && react_1.default.createElement(Icon_1.Icon, { name: "done", color: "success.normal", size: 20 })))));
};
exports.default = OverflowMenuItem;
