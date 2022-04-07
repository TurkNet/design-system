"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Page = ({ page, currentPage, onChange }) => {
    return (react_1.default.createElement(styled_1.PageStyled, { active: currentPage === page, onClick: () => onChange(page) }, page));
};
exports.default = Page;
