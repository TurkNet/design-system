"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
exports.BoxStyled = styled_components_1.default.div `
  ${styled_system_1.flexbox}
  ${styled_system_1.position}
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.color}
`;
