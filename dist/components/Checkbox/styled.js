"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelStyled = exports.CheckboxStyled = exports.variants = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
const variantStyle = (color1, color2) => {
    const mainColor = color2 || color1;
    return styled_components_1.css `
    :enabled {
      :after {
        background-color: ${styled_1.color('grey.100')};
        border-color: ${styled_1.color(`${mainColor}.normal`)};
      }

      :hover:after {
        border-color: ${styled_1.color(`${color1}.dark`)};
      }

      :focus:after,
      :active:after {
        background-color: ${styled_1.color('grey.100')};
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
        border-color: ${styled_1.color(`${mainColor}.dark`)};
      }

      :checked:after {
        background-color: ${styled_1.color(`${mainColor}.dark`)};
        border-color: transparent;
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
exports.CheckboxStyled = styled_components_1.default.input `
  position: relative;
  user-select: none;
  cursor: pointer;
  height: 16px;
  width: 18px;
  margin: 1px 8px 1px 0;
  flex-shrink: 0;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :after {
    height: 18px;
    width: 18px;
    border-radius: ${styled_1.borderRadius('small')};
    border: 2px solid;
    transition: 0.3s;
  }

  :checked:before {
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    margin-top: -1px;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 1px;
  }

  :disabled {
    opacity: ${styled_1.opacity('48')};
    cursor: default;
  }

  ${styled_1.switchProp('variant', exports.variants)}
`;
exports.LabelStyled = styled_components_1.default.label `
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: ${styled_1.fontSize('13')};
  width: fit-content;
  span {
    line-height: 18px;
  }
`;
