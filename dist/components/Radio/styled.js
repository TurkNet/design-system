"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelStyled = exports.RadioStyled = exports.variants = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
const variantStyle = (color1, color2) => {
    const mainColor = color2 || color1;
    return styled_components_1.css `
    :enabled {
      :after {
        background-color: ${styled_1.color(`grey.100`)};
        border-color: ${styled_1.color(`${mainColor}.normal`)};
      }

      :hover:after {
        border-color: ${styled_1.color(`${color1}.dark`)};
        background-color: ${styled_1.color(`${mainColor}.light`)};
      }

      :focus:after,
      :active:after {
        background-color: ${styled_1.color(`${mainColor}.light`)};
        border-color: ${styled_1.color(`${mainColor}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${styled_1.color(`grey.100`)};
        border-color: ${styled_1.color(`${color1}.normal`)};
      }

      :before {
        background-color: ${styled_1.color(`${color1}.normal`)};
      }

      :hover:after {
        border-color: ${styled_1.color(`${color1}.light`)};
      }

      :hover:before {
        background-color: ${styled_1.color(`${color1}.light`)};
      }

      :focus:after,
      :active:after {
        border-color: ${styled_1.color(`${color1}.dark`)};
      }

      :focus:before,
      :active:before {
        background-color: ${styled_1.color(`${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${styled_1.color(`${mainColor}.light`)};
        border-color: ${styled_1.color(`${mainColor}.dark`)};
      }

      :checked:after {
        background-color: ${styled_1.color(`grey.100`)};
      }

      :checked:before {
        background-color: ${styled_1.color(`${mainColor}.dark`)};
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
exports.RadioStyled = styled_components_1.default.input `
  position: relative;
  user-select: none;
  height: 16px;
  width: 18px;
  margin: 2px 6px 2px 0;

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
    border-radius: 50%;
    border: 2px solid;
  }

  :checked:before {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    z-index: 1;
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
