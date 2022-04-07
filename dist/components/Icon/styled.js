"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const utility_1 = require("../../utility");
exports.IconStyled = styled_components_1.default.span `
  &.custom-icons {
    ${styled_system_1.typography}
    ${styled_system_1.color}
    width: ${utility_1.prop('fontSize')}px;
    overflow: hidden;
    display: block;
    cursor: ${utility_1.prop('cursor', 'inherit')};
  }
`;
