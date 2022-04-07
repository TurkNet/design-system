"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalGlobalStyle = exports.ModalBgStyled = exports.ModalContentStyled = exports.ModalStyled = exports.CrossIconStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const Box_1 = require("../Box");
const styled_1 = require("../../utility/styled");
const animation_1 = require("../../shared/animation");
exports.CrossIconStyled = styled_components_1.default.span `
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
  z-index: 10;
`;
exports.ModalStyled = styled_components_1.default.div `
  text-align: left;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
exports.ModalContentStyled = styled_components_1.default(Box_1.Box) `
  position: relative;
  min-width: 300px;
  overflow: auto;
  background-color: ${styled_1.color('grey.100')};
  box-shadow: 0 4px 16px 0 ${styled_1.color('grey.700')};
  border-radius: 8px;
  z-index: 2;
  animation: ${animation_1.zoomIn} 0.3s ease-out;
`;
exports.ModalBgStyled = styled_components_1.default.div `
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${styled_1.color('grey.1100', 0.5)};
  overflow: hidden;
  z-index: 1;
  animation: ${animation_1.fadeIn} 0.3s ease-out;
`;
exports.ModalGlobalStyle = styled_components_1.createGlobalStyle `
  body { 
    overflow: hidden; 
    padding-right: 15px;
  }
  @media (max-width: 768px){
    body { 
      padding-right: 0;
    }
  }
`;
