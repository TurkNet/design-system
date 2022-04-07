"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeStyled = void 0;
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
exports.BadgeStyled = styled_components_1.default.div `
  position: relative;
  color: ${styled_1.color('grey.100')};
  height: 24px;
  padding: 0 16px;
  font-size: ${styled_1.fontSize('12')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  border: 2px solid;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${styled_system_1.space}
  ${styled_1.switchProp('variant', variants)}
`;
