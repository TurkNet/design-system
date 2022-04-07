"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Pages_1 = require("./Pages");
const styled_1 = require("./styled");
const Icon_1 = require("../Icon");
const utility_1 = require("../../utility");
const Pagination = ({ currentPage = 1, totalItemsCount, itemsCountPerPage, onChange = utility_1.noop, }) => {
    const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage);
    const handleChange = (currentPage) => {
        onChange(currentPage);
    };
    return (react_1.default.createElement(styled_1.PaginationStyled, null,
        react_1.default.createElement(styled_1.PageStyled, { last: currentPage === 1, onClick: () => handleChange(currentPage - 1) },
            react_1.default.createElement(Icon_1.Icon, { name: "chevron_left", fontSize: "20px" })),
        react_1.default.createElement(Pages_1.Pages, { totalPages: totalPages, currentPage: currentPage, onChange: handleChange }),
        react_1.default.createElement(styled_1.PageStyled, { last: currentPage === totalPages, onClick: () => handleChange(currentPage + 1) },
            react_1.default.createElement(Icon_1.Icon, { name: "chevron_right", fontSize: "20px" }))));
};
exports.Pagination = Pagination;
