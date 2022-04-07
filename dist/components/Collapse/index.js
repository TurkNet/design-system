"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = require("../Box");
const styled_1 = require("./styled");
const Collapse = (_a) => {
    var { children, expanded } = _a, props = tslib_1.__rest(_a, ["children", "expanded"]);
    return (react_1.default.createElement(styled_1.CollapseStyled, { expanded: expanded },
        react_1.default.createElement(Box_1.Box, Object.assign({}, props), children)));
};
exports.Collapse = Collapse;
