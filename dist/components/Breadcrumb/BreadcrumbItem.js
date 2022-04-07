"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Box_1 = require("../Box");
const styled_1 = require("./styled");
const BreadcrumbItem = ({ children, label }) => (react_1.default.createElement(styled_1.BreadCrumbItemStyled, null,
    react_1.default.createElement(Box_1.Box, null, label || children)));
exports.default = BreadcrumbItem;
