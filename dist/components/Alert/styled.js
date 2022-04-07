"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
exports.AlertStyled = styled_components_1.default.div `
  background-color: ${styled_1.propColor('normal', 0.1)};
  border-radius: ${styled_1.borderRadius('normal')};
  color: ${styled_1.color('grey.700')};
  font-size: ${styled_1.fontSize('15')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  line-height: 1.6;
  padding: 12px 16px 12px 12px;
  border-left: 4px solid ${styled_1.propColor('normal')};
  ${styled_system_1.space}
`;
