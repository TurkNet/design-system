"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Card = (_a) => {
    var { title, subtitle, content, footer, image } = _a, props = tslib_1.__rest(_a, ["title", "subtitle", "content", "footer", "image"]);
    return (react_1.default.createElement(styled_1.CardStyled, Object.assign({}, props),
        react_1.default.createElement(styled_1.ImageStyled, null, image),
        react_1.default.createElement(styled_1.HeaderStyled, null,
            react_1.default.createElement(styled_1.TitleStyled, null, title),
            react_1.default.createElement(styled_1.SubtitleStyled, null, subtitle)),
        react_1.default.createElement(styled_1.ContentStyled, null, content),
        react_1.default.createElement(styled_1.FooterStyled, null, footer)));
};
exports.Card = Card;
