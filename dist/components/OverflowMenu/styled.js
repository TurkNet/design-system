"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowLabel = exports.OverflowMenuItemStyled = exports.OverflowMenuStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const utility_1 = require("../../utility");
exports.OverflowMenuStyled = styled_components_1.default.ol `
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  li:last-child {
    border-bottom: none;
  }
`;
exports.OverflowMenuItemStyled = styled_components_1.default.li `
  display: inline-flex;
  align-items: center;
  padding: 16px 18px;
  height: auto;
  border-bottom: 1px solid ${utility_1.color('grey.300')};
  cursor: pointer;
  user-select: none;
  color: ${utility_1.color('grey.800')};
  ${utility_1.ifProp('active', styled_components_1.css `
      * {
        color: currentColor;
      }
    `)};
  ${styled_system_1.layout}
`;
exports.OverflowLabel = styled_components_1.default.span `
  min-width: 132px;
  margin-left: 14px;
  font-size: ${utility_1.fontSize('13')};
  font-weight: ${utility_1.fontWeight('semi-bold')};
  width: 80%;
  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
