"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbItem = exports.Breadcrumb = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const BreadcrumbItem_1 = tslib_1.__importDefault(require("./BreadcrumbItem"));
exports.BreadcrumbItem = BreadcrumbItem_1.default;
const styled_1 = require("./styled");
const Breadcrumb = ({ children }) => (react_1.default.createElement("nav", { "aria-label": "breadcrumbs" },
    react_1.default.createElement(styled_1.BreadCrumbStyled, null, children)));
exports.Breadcrumb = Breadcrumb;
