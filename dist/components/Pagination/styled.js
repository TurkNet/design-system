"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageStyled = exports.PaginationStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const utility_1 = require("../../utility");
exports.PaginationStyled = styled_components_1.default.ul `
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
`;
exports.PageStyled = styled_components_1.default.li `
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
  font-size: ${utility_1.fontSize('15')};
  font-weight: ${utility_1.fontWeight('semi-bold')};
  border-radius: 4px;
  border: solid 2px ${utility_1.color('grey.400')};
  user-select: none;
  &:hover {
    background-color: ${utility_1.color('grey.400')};
  }

  ${utility_1.ifProp('active', styled_components_1.css `
      border-color: ${utility_1.color('primary.normal')};
      color: ${utility_1.color('primary.normal')};
    `)}

  ${utility_1.ifProp({ last: true }, styled_components_1.css `
      pointer-events: none;
      background-color: ${utility_1.color('grey.400')};
    `)}

  ${utility_1.ifProp({ last: false }, styled_components_1.css `
      background-color: ${utility_1.color('primary.normal')} !important;
      border-color: ${utility_1.color('primary.normal')};
      color: ${utility_1.color('grey.100')};
    `)}
`;
