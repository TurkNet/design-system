"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabStyled = exports.TabsStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const utility_1 = require("../../utility");
exports.TabsStyled = styled_components_1.default.div `
  display: flex;
  align-items: flex-end;
  ${utility_1.ifProp('fullWidth', styled_components_1.css `
      div {
        justify-content: center;
        flex: 1;
        text-align: center;
      }
    `)}
`;
exports.TabStyled = styled_components_1.default.div `
  border-bottom: 4px solid;
  border-color: ${utility_1.color('grey.400')};
  border-radius: 1px;
  font-size: ${utility_1.fontSize('14')};
  font-weight: ${utility_1.fontWeight('semi-bold')};
  padding: 12px 24px;
  cursor: pointer;
  color: ${utility_1.color('sky.dark')};
  ${utility_1.ifProp('isActive', styled_components_1.css `
      border-color: ${utility_1.color('primary.normal')};
      color: ${utility_1.color('primary.normal')};
    `)}
`;
