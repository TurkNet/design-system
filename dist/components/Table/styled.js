"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableLoading = exports.TableTdStyled = exports.TableTrStyled = exports.TableThStyled = exports.TableStyled = exports.Wrapped = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_1 = require("../../utility/styled");
exports.Wrapped = styled_components_1.default.div `
  border: 2px solid ${styled_1.color('grey.400')};
  border-radius: ${styled_1.borderRadius('large')};
`;
exports.TableStyled = styled_components_1.default.table `
  width: 100%;
  border-collapse: collapse;
  position: relative;
`;
exports.TableThStyled = styled_components_1.default.th `
  position: relative;
  height: 64px;
  padding: 16px;
  font-size: ${styled_1.fontSize('15')};
  font-weight: ${styled_1.fontWeight('semi-bold')};
  background-color: transparent !important;
  text-align: left;
  border-style: solid;
  border-color: ${styled_1.color('grey.400')};
  border-width: 0 2px 2px 0;
  user-select: none;
  cursor: ${styled_1.ifProp('sortable', 'pointer', 'inherit')};

  :last-of-type {
    border-right-width: 0;
  }

  .material-icons {
    position: absolute;
    right: 16px;
    top: 20px;
  }
`;
exports.TableTrStyled = styled_components_1.default.tr `
  :nth-child(even) {
    background-color: ${styled_1.color('grey.200')};
  }
  :last-child {
    td:first-child {
      border-bottom-left-radius: 4px;
    }
    td:last-child {
      border-bottom-right-radius: 4px;
    }
  }
`;
exports.TableTdStyled = styled_components_1.default.td `
  height: 48px;
  padding: 0 16px 0 16px;
`;
exports.TableLoading = styled_components_1.default.div `
  display: table-row;
  margin: 60px auto;
  justify-content: center;
  align-items: center;
`;
