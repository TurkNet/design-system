"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionItem = exports.Accordion = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AccordionItem_1 = tslib_1.__importDefault(require("./AccordionItem"));
exports.AccordionItem = AccordionItem_1.default;
const Box_1 = require("../Box");
const Accordion = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    return react_1.default.createElement(Box_1.Box, Object.assign({}, props), children);
};
exports.Accordion = Accordion;
