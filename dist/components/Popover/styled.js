"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverStyled = exports.Overlay = exports.variants = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
const animation_1 = require("../../shared/animation");
exports.variants = {
    topCenter: styled_components_1.css `
    bottom: 0;
    transform: translate(-25%, -40px);
  `,
    topLeft: styled_components_1.css `
    bottom: 0;
    transform: translateY(-40px);
  `,
    topRight: styled_components_1.css `
    bottom: 0;
    transform: translate(-50%, -40px);
  `,
    right: styled_components_1.css `
    left: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
  `,
    bottomCenter: styled_components_1.css `
    top: 0;
    transform: translate(-25%, 40px);
  `,
    bottomLeft: styled_components_1.css `
    top: 0;
    transform: translateY(40px);
  `,
    bottomRight: styled_components_1.css `
    top: 0;
    transform: translate(-50%, 40px);
  `,
    left: styled_components_1.css `
    top: 50%;
    right: calc(100% + 20px);
    transform: translateY(-50%);
  `,
};
exports.Overlay = styled_components_1.default.div `
  min-width: 121px;
  max-width: 500px;
  min-height: 28px;
  text-align: center;
  border-radius: ${styled_1.borderRadius('normal')};
  background-color: ${styled_1.color('grey.100')};
  position: absolute;
  z-index: 2;
  box-sizing: border-box;

  opacity: 0;
  transition: all 0.3s ease;
  animation: ${animation_1.fadeIn} 0.3s ease;
  box-shadow: 0 2px 4px 0 rgba(16, 20, 38, 0.2);

  ${styled_1.switchProp('variant', exports.variants)}

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% + 40px);
    width: calc(100% + 40px);
    z-index: -1;
  }
`;
exports.PopoverStyled = styled_components_1.default.div `
  display: inline-block;
  position: relative;
  text-align: left;
  cursor: pointer;

  &:hover {
    ${exports.Overlay} {
      opacity: 1;
    }
  }
`;
