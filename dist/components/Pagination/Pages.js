"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Page_1 = tslib_1.__importDefault(require("./Page"));
const styled_1 = require("./styled");
const utility_1 = require("../../utility");
const Pages = ({ totalPages, currentPage, onChange, }) => {
    const showingPage = 5;
    const buffer = 3;
    const middlePage = 3;
    const midPageRestriction = 1;
    if (totalPages <= showingPage) {
        return (react_1.default.createElement(react_1.default.Fragment, null, utility_1.map(totalPages, page => (react_1.default.createElement(Page_1.default, { key: page, page: page + 1, currentPage: currentPage, onChange: onChange })))));
    }
    if (currentPage + buffer > totalPages) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Page_1.default, { page: 1, currentPage: currentPage, onChange: onChange }),
            react_1.default.createElement(styled_1.PageStyled, null, "..."),
            utility_1.map(buffer + 1, page => (react_1.default.createElement(Page_1.default, { key: page, page: totalPages - page, currentPage: currentPage, onChange: onChange }))).reverse()));
    }
    if (currentPage - buffer < 1) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            utility_1.map(buffer + 1, page => (react_1.default.createElement(Page_1.default, { key: page, page: page + 1, currentPage: currentPage, onChange: onChange }))),
            react_1.default.createElement(styled_1.PageStyled, null, "..."),
            react_1.default.createElement(Page_1.default, { page: totalPages, currentPage: currentPage, onChange: onChange })));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Page_1.default, { page: 1, currentPage: currentPage, onChange: onChange }),
        react_1.default.createElement(styled_1.PageStyled, null, "..."),
        utility_1.map(middlePage, page => (react_1.default.createElement(Page_1.default, { key: page, page: currentPage - midPageRestriction + page, currentPage: currentPage, onChange: onChange }))),
        react_1.default.createElement(styled_1.PageStyled, null, "..."),
        react_1.default.createElement(Page_1.default, { page: totalPages, currentPage: currentPage, onChange: onChange })));
};
exports.Pages = Pages;
