"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadCrumbItemStyled = exports.BreadCrumbStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const utility_1 = require("../../utility");
exports.BreadCrumbStyled = styled_components_1.default.ol `
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;
exports.BreadCrumbItemStyled = styled_components_1.default.li `
  display: flex;
  margin-right: 16px;
  color: ${utility_1.color('grey.600')};
  align-items: center;
  *:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${utility_1.color('primary.normal')};
  }
  &:last-child {
    color: ${utility_1.color('primary.normal')};
  }
  &:not(:first-child) {
    margin-left: 8px;
    div {
      margin-left: 16px;
    }
    &:before {
      content: '›';
      color: ${utility_1.color('grey.600')};
    }
  }
`;
