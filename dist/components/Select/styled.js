"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSelectStyled = exports.SelectStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const react_select_1 = tslib_1.__importDefault(require("react-select"));
const async_1 = tslib_1.__importDefault(require("react-select/async"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
const variantStyle = (variant, secondary) => styled_components_1.css `
  border: 2px solid ${styled_1.color(`${secondary || variant}.normal`)};
  &:hover {
    border: 2px solid ${styled_1.color(`${secondary || variant}.normal`)};
  }

  &:focus,
  &:active,
  &--is-focused {
    border-color: ${styled_1.color(`${variant}.dark`)} !important;
  }
`;
const variants = {
    success: variantStyle('success'),
    info: variantStyle('info'),
    danger: variantStyle('danger'),
    warning: variantStyle('warning'),
    primary: variantStyle('primary', 'sky'),
};
const styledSelect = styled_components_1.css `
  .select {
    &-container {
      ${styled_system_1.space}
    }
    &__control {
      background-color: transparent;
      width: 100%;
      cursor: pointer;
      height: auto;
      min-height: 48px;
      font-size: ${styled_1.fontSize('15')};
      padding: 0 6px;
      color: ${styled_1.color('grey.800')};
      border-radius: ${styled_1.borderRadius('normal')};
      box-shadow: none;
      ${styled_1.switchProp('variant', variants)};

      &--is-disabled {
        opacity: ${styled_1.opacity('48')};
        background-color: ${styled_1.color('grey.200')};
      }
      &--is-focused {
        .select__placeholder {
          font-weight: ${styled_1.fontWeight('semi-bold')};
        }
      }
    }
    &__placeholder {
      color: ${styled_1.color('grey.600')};
      opacity: ${styled_1.opacity('100')};
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      width: 100%;
      border-radius: 4px;
      border: solid 2px ${styled_1.color('sky.light')};
      padding: 0;
      background-color: ${styled_1.color('grey.100')};
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03),
        -5px 5px 5px rgba(0, 0, 0, 0.03);
      position: absolute;
      z-index: 9999999;
      margin-bottom: 30px;
    }
    &__option {
      font-size: 15px;
      font-weight: 600;
      padding: 12px 16px;
      border: none;
      cursor: pointer;
      content-visibility: auto;
      contain-intrinsic-size: 30px;
      &:hover {
        background-color: ${styled_1.color('primary.light')};
        color: ${styled_1.color('grey.100')};
      }
      &--is-selected {
        background-color: ${styled_1.color('primary.normal')};
        color: ${styled_1.color('grey.100')};
      }
    }
    &__multi-value {
      position: relative;
      color: ${styled_1.color('grey.100')};
      height: 24px;
      padding: 0 16px;
      font-size: 12px;
      font-weight: 600;
      border: 2px solid;
      border-radius: ${styled_1.borderRadius('normal')};
      display: inline-flex;
      align-items: center;
      background-color: ${styled_1.color('primary.normal', 0.08)};
      border-color: ${styled_1.color('primary.normal')};
      color: ${styled_1.color('primary.normal')};
      ${styled_1.switchProp('variant', variants)};
      ${styled_system_1.space}
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
    }
    &__indicator {
      color: ${styled_1.color('sky.dark')};
    }
  }
`;
exports.SelectStyled = styled_components_1.default(react_select_1.default) `
  ${styledSelect}
`;
exports.SearchSelectStyled = styled_components_1.default(async_1.default) `
  ${styledSelect}
`;
