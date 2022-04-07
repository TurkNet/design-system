"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineStyled = exports.TextStyled = exports.BulletStyled = exports.StepLabelStyled = exports.StepStyled = exports.StepperStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
exports.StepperStyled = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  hr:last-child {
    display: none;
  }
`;
exports.StepStyled = styled_components_1.default.section `
  ${styled_1.ifProp({ vertical: true }, styled_components_1.css `
      border-left: 2px solid ${styled_1.color('grey.300')};
      margin: 0 12px;
      padding-left: 20px;
      min-height: 32px;
    `)}

  :last-of-type {
    border-color: transparent;
  }
`;
exports.StepLabelStyled = styled_components_1.default.div `
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 12px 0;
`;
exports.BulletStyled = styled_components_1.default.div `
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${styled_1.fontSize('12')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  background-color: ${styled_1.propColor('primary.normal')};
  color: ${styled_1.color('grey.200')};
  ${styled_1.ifProp({ isPassive: true }, styled_components_1.css `
      background-color: ${styled_1.color('grey.400')}};
      color: ${styled_1.color('grey.600')};
    `)}
`;
exports.TextStyled = styled_components_1.default.div `
  margin-left: 10px;
  font-size: ${styled_1.fontSize('13')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  ${styled_1.ifProp({ isPassive: true }, styled_components_1.css `
      font-weight: ${styled_1.fontWeight('regular')};
      color: ${styled_1.color('grey.600')};
    `)}

  :empty {
    display: none;
  }
`;
exports.LineStyled = styled_components_1.default.hr `
  flex: 1;
  height: 2px;
  background-color: ${styled_1.color('grey.300')};
  border-width: 0;
  margin-left: 10px;
  margin-right: 10px;
`;
