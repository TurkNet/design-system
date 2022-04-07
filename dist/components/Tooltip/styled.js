"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipStyled = exports.variants = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
exports.variants = {
    topCenter: styled_components_1.css `
    :before {
      bottom: 100%;
      transform: translate(-50%, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(-50%, -4px);
    }
    :before,
    :after {
      left: 50%;
    }
  `,
    topLeft: styled_components_1.css `
    :before {
      bottom: 100%;
      transform: translate(16px, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(0px, -4px);
    }
    :before,
    :after {
      left: 0px;
    }
  `,
    topRight: styled_components_1.css `
    :before {
      bottom: 100%;
      transform: translate(-16px, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(0px, -4px);
    }
    :before,
    :after {
      right: 0px;
    }
  `,
    right: styled_components_1.css `
    :before {
      right: calc(0em - 12px);
      transform: translate(8px, -50%) rotate(45deg);
      border-width: 0 10px 10px 0px;
    }
    :after {
      left: calc(100% + 5px);
      transform: translate(8px, -50%);
    }
    :before,
    :after {
      top: 50%;
    }
  `,
    bottomCenter: styled_components_1.css `
    :before {
      top: 89%;
      transform: translate(-50%, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(-50%, 7px);
    }
    :before,
    :after {
      left: 50%;
    }
  `,
    bottomLeft: styled_components_1.css `
    :before {
      top: 89%;
      transform: translate(16px, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(0px, 7px);
    }
    :before,
    :after {
      left: 0px;
    }
  `,
    bottomRight: styled_components_1.css `
    :before {
      top: 89%;
      transform: translate(-16px, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(0px, 7px);
    }
    :before,
    :after {
      right: 0px;
    }
  `,
    left: styled_components_1.css `
    :before {
      left: calc(0em - 28px);
      transform: translate(8px, -50%) rotate(225deg);
      border-width: 0 10px 10px 0px;
    }
    :after {
      right: calc(100% + 5px);
      transform: translate(-8px, -50%);
    }
    :before,
    :after {
      top: 50%;
    }
  `,
};
exports.TooltipStyled = styled_components_1.default.span `
  position: relative;
  cursor: pointer;

  :before,
  :after {
    line-height: 16px;
    font-size: ${styled_1.fontSize('12')};
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    display: none;
  }
  :before {
    content: '';
    border: solid transparent;
    z-index: 2;
    border-bottom-color: ${styled_1.color(`grey.1100`)};
  }
  :after {
    content: attr(data-tooltip);
    text-align: center;
    min-width: 121px;
    max-width: 500px;
    min-height: 28px;
    padding: 6px 6px;
    border-radius: ${styled_1.borderRadius('normal')};
    background: ${styled_1.color(`grey.1100`)};
    color: ${styled_1.color(`grey.100`)};
    z-index: 99;
  }

  :hover:before,
  :hover:after {
    display: block;
  }

  ${styled_1.switchProp('variant', exports.variants)}
`;
