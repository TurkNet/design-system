"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const Box_1 = require("../Box");
exports.FlexStyled = styled_components_1.default(Box_1.Box) `
  display: flex;
  ${styled_system_1.flexbox}
`;
