"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelStyled = exports.ToggleStyled = exports.variants = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
const variantStyle = (color1, color2) => {
    const mainColor = color2 || color1;
    return styled_components_1.css `
    :enabled {
      :after {
        background-color: ${styled_1.color(`${mainColor}.light`)};
        border-color: ${styled_1.color(`${mainColor}.normal`)};
      }

      :hover:after {
        border-color: ${styled_1.color(`${color1}.dark`)};
      }

      :focus:after,
      :active:after {
        background-color: ${styled_1.color(`${mainColor}.light`)};
        border-color: ${styled_1.color(`${mainColor}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${styled_1.color(`${color1}.normal`)};
        border-color: transparent;
      }

      :hover:after {
        background-color: ${styled_1.color(`${color1}.light`)};
        border-color: transparent;
      }

      :focus:after,
      :active:after {
        background-color: ${styled_1.color(`${color1}.normal`)};
        border-color: ${styled_1.color(`${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${styled_1.color(`${mainColor}.light`)};
        border-color: ${styled_1.color(`${color1}.dark`)};
      }

      :before,
      :checked:before {
        background-color: ${styled_1.color(`${mainColor}.normal`)};
      }
    }
  `;
};
exports.variants = {
    success: variantStyle('success'),
    danger: variantStyle('danger'),
    info: variantStyle('info'),
    warning: variantStyle('warning'),
    primary: variantStyle('primary'),
    standart: variantStyle('primary', 'sky'),
};
exports.ToggleStyled = styled_components_1.default.input `
  position: relative;
  user-select: none;
  cursor: pointer;
  margin: 2px 6px 2px 0;
  width: 52px;
  height: 30px;
  border-radius: 50%;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
  }

  :after {
    height: 32px;
    width: 52px;
    border-radius: 100px;
    border: 2px solid;
  }

  :before {
    width: 28px;
    height: 28px;
    background-color: ${styled_1.color('grey.100')};
    border-radius: 100%;
    z-index: 1;
    left: calc(25% + 3px);
  }

  :checked:before {
    left: calc(75% - 3px);
  }

  :disabled {
    opacity: ${styled_1.opacity('48')};
    cursor: default;
  }

  ${styled_1.switchProp('variant', exports.variants)}
`;
exports.LabelStyled = styled_components_1.default.label `
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${styled_1.fontSize('13')};
`;
