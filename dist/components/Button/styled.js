"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
const sizes = {
    giant: {
        height: '56px',
        fontSize: '18',
    },
    large: {
        height: '48px',
        fontSize: '16',
    },
    medium: {
        height: '40px',
        fontSize: '14',
    },
    small: {
        height: '32px',
        fontSize: '12',
    },
    tiny: {
        height: '24px',
        fontSize: '10',
    },
};
const variants = {
    fill: styled_components_1.css `
    border: none;
    background-color: ${styled_1.propColor('normal')};
    color: ${styled_1.color('grey.100')};
    &:hover {
      background-color: ${styled_1.propColor('light')};
    }
    &:active,
    &:focus {
      background-color: ${styled_1.propColor('dark')};
    }
    &:disabled {
      background-color: ${styled_1.color('grey.400')};
      color: ${styled_1.color('grey.600')};
    }
    ${styled_1.ifProp({ color: 'sky' }, styled_components_1.css `
        color: ${styled_1.color('grey.800')};
        background-color: ${styled_1.color('grey.300')};
        &:active,
        &:focus {
          background-color: ${styled_1.propColor('normal')};
        }
      `)}
  `,
    outline: styled_components_1.css `
    background-color: ${styled_1.color('grey.100')};
    border: solid 2px ${styled_1.propColor('normal')};
    color: ${styled_1.propColor('normal')};
    &:hover {
      background-color: ${styled_1.propColor('normal', 0.16)};
    }
    &:active,
    &:focus {
      background-color: ${styled_1.propColor('normal', 0.24)};
    }
    &:disabled {
      background-color: ${styled_1.color('grey.600', 0.01)};
      border-color: ${styled_1.color('grey.600', 0.24)};
    }
  `,
    ghost: styled_components_1.css `
    background-color: ${styled_1.color('grey.100')};
    border: 2px solid transparent;
    color: ${styled_1.propColor('normal')};
    &:hover {
      background-color: ${styled_1.propColor('light', 0.08)};
    }
    &:active {
      background-color: ${styled_1.propColor('light', 0.16)};
    }
    &:focus {
      background-color: ${styled_1.propColor('normal', 0.16)};
      border-color: ${styled_1.propColor('light', 0.16)};
    }
    &:disabled {
      background-color: ${styled_1.color('grey.600', 0.16)};
    }
  `,
};
const positions = {
    right: styled_components_1.css `
    > :first-child {
      margin-right: 25px;
    }
  `,
    left: styled_components_1.css `
    flex-direction: row-reverse;
    > :last-child {
      margin-right: 12px;
    }
  `,
};
exports.ButtonStyled = styled_components_1.default.button `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  user-select: none;
  cursor: pointer;
  * {
    color: currentColor;
  }
  span:empty {
    display: none;
  }
  span:only-child {
    margin: 0;
  }
  border-radius: ${styled_1.borderRadius('normal')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  ${styled_1.ifProp({ fullWidth: true }, styled_components_1.css `
      width: 100%;
    `, styled_components_1.css `
      width: ${styled_1.prop('width')}px;
    `)}

  ${styled_system_1.variant({ prop: 'size', variants: sizes })};
  ${styled_1.switchProp('variant', variants)};
  ${styled_1.switchProp('alignment', positions)};
  ${styled_system_1.space}
`;
