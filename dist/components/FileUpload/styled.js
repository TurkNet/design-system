"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const utility_1 = require("../../utility");
const variants = {
    success: {
        borderColor: 'success.normal',
        color: 'success.dark',
        fontWeight: 'semi-bold',
    },
    sky: {
        borderColor: 'sky.normal',
        color: 'sky.dark',
        fontWeight: 'semi-bold',
    },
    danger: {
        borderColor: 'danger.normal',
        color: 'danger.dark',
        fontWeight: 'semi-bold',
    },
};
exports.FileUploadStyled = styled_components_1.default.div `
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px;
  border-radius: 4px;

  span {
    font-size: 13px;
    padding-right: 10px;
    color: currentColor;
  }

  button {
    border-color: transparent;
    border-radius: 4px;
    background-color: ${utility_1.color('grey.300')};
    padding: 8px 11px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  input {
    display: none;
  }

  ${styled_system_1.variant({ variants })}
`;
