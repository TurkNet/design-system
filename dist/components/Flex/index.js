"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Flex = props => react_1.default.createElement(styled_1.FlexStyled, Object.assign({}, props));
exports.Flex = Flex;
