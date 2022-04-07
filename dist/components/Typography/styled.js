"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const styled_1 = require("../../utility/styled");
const variants = {
    h1: {
        fontSize: '36',
        fontWeight: 'semi-bold',
    },
    h2: {
        fontSize: '32',
        fontWeight: 'semi-bold',
    },
    h3: {
        fontSize: '30',
        fontWeight: 'bold',
    },
    h4: {
        fontSize: '26',
        fontWeight: 'bold',
    },
    h5: {
        fontSize: '22',
        fontWeight: 'semi-bold',
    },
    h6: {
        fontSize: '18',
        fontWeight: 'semi-bold',
    },
    subtitle1: {
        fontSize: '15',
        fontWeight: 'semi-bold',
    },
    subtitle2: {
        fontSize: '13',
        fontWeight: 'semi-bold',
    },
    paragraph1: {
        fontSize: '15',
    },
    paragraph2: {
        fontSize: '13',
    },
    caption1: {
        fontSize: '12',
    },
    caption2: {
        fontSize: '12',
        fontWeight: 'semi-bold',
    },
    label: {
        fontSize: '12',
        fontWeight: 'bold',
    },
    span: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
    },
};
exports.TypographyStyled = styled_components_1.default.div `
  padding: 0;
  margin: 0;
  cursor: ${styled_1.prop('cursor', 'inherit')};
  ${styled_system_1.variant({ variants })};
  ${styled_system_1.typography};
  ${styled_system_1.color};
  ${styled_system_1.space};
`;
