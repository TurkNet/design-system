"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
const variants = {
    fill: styled_components_1.css `
    background-color: ${styled_1.propColor('normal')};
    border-color: ${styled_1.propColor('normal')};
  `,
    outline: styled_components_1.css `
    background-color: ${styled_1.propColor('normal', 0.08)};
    border-color: ${styled_1.propColor('normal')};
    color: ${styled_1.propColor('normal')};
  `,
};
exports.TagStyled = styled_components_1.default.div `
  position: relative;
  color: ${styled_1.color('grey.100')};
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  ${styled_system_1.space}
  ${styled_1.switchProp('variant', variants)}

  * {
    color: currentColor;
  }

  > :last-child {
    margin-left: 6px;
    margin-right: -12px;
  }

  > :first-child {
    margin: 0;
  }
`;
