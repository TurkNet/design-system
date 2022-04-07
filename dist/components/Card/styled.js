"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterStyled = exports.ContentStyled = exports.SubtitleStyled = exports.TitleStyled = exports.HeaderStyled = exports.ImageStyled = exports.CardStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
exports.CardStyled = styled_components_1.default.div `
  border: 2px solid ${styled_1.color('grey.400')};
  border-radius: ${styled_1.borderRadius('normal')};
  ${styled_system_1.space}
  ${styled_system_1.layout}
`;
exports.ImageStyled = styled_components_1.default.div `
  width: 100%;
  height: 230px;
  overflow: hidden;
  transform: scale(1.013);
  border-radius: 4px 4px 0 0;
  :empty {
    display: none;
  }
`;
exports.HeaderStyled = styled_components_1.default.div `
  padding: 16px 24px;
  border-bottom: 1px solid ${styled_1.color('grey.300')};
`;
exports.TitleStyled = styled_components_1.default.div `
  font-size: ${styled_1.fontSize('18')};
  line-height: 24px;
  font-weight: ${styled_1.fontWeight('semi-bold')};
`;
exports.SubtitleStyled = styled_components_1.default.div `
  font-size: ${styled_1.fontSize('13')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  margin-top: ${styled_1.space('space.xxs')};
  :empty {
    margin-top: 0;
  }
`;
exports.ContentStyled = styled_components_1.default.div `
  padding: 14px 24px;
  font-size: ${styled_1.fontSize('15')};
  line-height: 20px;
`;
exports.FooterStyled = styled_components_1.default.div `
  padding: 14px 24px;
  border-top: 1px solid ${styled_1.color('grey.300')};
  font-size: ${styled_1.fontSize('12')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  :empty {
    display: none;
  }
`;
