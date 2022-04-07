"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStyled = exports.InputStyled = exports.WrapperStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
const variantStyle = (variant, secondary) => styled_components_1.css `
  border: 2px solid ${styled_1.color(`${secondary || variant}.normal`)};

  :enabled:focus,
  :enabled:active {
    border-color: ${styled_1.color(`${variant}.dark`)};

    ::placeholder {
      font-weight: ${styled_1.fontWeight('semi-bold')};
    }
  }
`;
const variants = {
    success: variantStyle('success'),
    info: variantStyle('info'),
    danger: variantStyle('danger'),
    warning: variantStyle('warning'),
    primary: variantStyle('primary', 'sky'),
};
exports.WrapperStyled = styled_components_1.default.div `
  position: relative;
  background-color: ${styled_1.color('grey.100')};
  border-radius: ${styled_1.borderRadius('normal')};
  z-index: 1;
`;
exports.InputStyled = styled_components_1.default.input `
  ${styled_system_1.space}
  height: 48px;
  width: 100%;
  background-color: transparent;
  font-size: ${styled_1.fontSize('15')};
  padding: ${styled_1.space('medium')};
  color: ${styled_1.color('grey.800')};
  border-radius: ${styled_1.borderRadius('normal')};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${styled_1.color('grey.600')};
    opacity: ${styled_1.opacity('100')};
  }

  ${styled_1.switchProp('variant', variants)};

  :disabled {
    opacity: ${styled_1.opacity('48')};
    background-color: ${styled_1.color('grey.200')};
  }
`;
exports.IconStyled = styled_components_1.default.span `
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  z-index: ${styled_1.ifProp('onClick', '0', '-1')};
  display: flex;
  height: auto;
`;
