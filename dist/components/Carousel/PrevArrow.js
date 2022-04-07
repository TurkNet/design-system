"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Icon_1 = require("../Icon");
const styled_1 = require("./styled");
const PrevArrow = ({ className, onClick }) => {
    return (react_1.default.createElement(styled_1.ArrowStyled, { alignItems: "center", className: className, onClick: onClick },
        react_1.default.createElement(Icon_1.Icon, { name: "arrow_back_ios", color: "sky.dark" })));
};
exports.default = PrevArrow;
