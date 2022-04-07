"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
exports.ButtonGroupStyled = styled_components_1.default.div `
  button:nth-child(n + 1) {
    border-radius: 0;
    ${styled_1.switchProp('variant', {
    fill: styled_components_1.css `
        :not(:first-child) {
          border-left: 1px solid ${styled_1.propColor('dark')};
        }
      `,
    outline: styled_components_1.css `
        :not(:first-child) {
          border-left: 0;
        }
      `,
    ghost: styled_components_1.css `
        :not(:first-child) {
          border-left: 1px solid ${styled_1.propColor('light', 0.8)};
        }
        :not(:last-child) {
          border-right: 0;
        }
      `,
})}
  }

  button:first-child {
    border-radius: ${styled_1.borderRadius('normal', '0', '0', 'normal')};
  }
  button:last-child {
    border-radius: ${styled_1.borderRadius('0', 'normal', 'normal', '0')};
  }
`;
