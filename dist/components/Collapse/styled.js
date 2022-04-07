"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_tools_1 = require("styled-tools");
exports.CollapseStyled = styled_components_1.default.div `
  transition: all 0.3s ease;
  max-height: 0px;
  ${styled_tools_1.ifNotProp('expanded', styled_components_1.css `
      overflow: hidden;
      max-height: 0px;
    `, styled_components_1.css `
      max-height: 100%;
    `)}
`;
