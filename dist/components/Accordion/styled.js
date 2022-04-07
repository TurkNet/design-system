"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderStyled = exports.SummaryStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_1 = require("../../utility/styled");
const Flex_1 = require("../Flex");
exports.SummaryStyled = styled_components_1.default(Flex_1.Flex) `
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-size: ${styled_1.fontSize('15')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  padding: 12px 0;
  position: relative;
  padding-right: 40px;
  span {
    position: absolute;
    right: 16px;
  }
`;
exports.BorderStyled = styled_components_1.default.div `
  height: 1px;
  background-color: ${styled_1.color('grey.300')};
  margin-top: ${styled_1.ifProp('expanded', '24px', '0px')};
  transition: margin 0.3s ease;
`;
