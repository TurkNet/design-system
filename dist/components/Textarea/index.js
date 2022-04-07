"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
exports.Textarea = react_1.default.forwardRef((_a, ref) => {
    var { variant = 'primary' } = _a, props = tslib_1.__rest(_a, ["variant"]);
    return (react_1.default.createElement(styled_1.TextareaStyled, Object.assign({ rows: 4, variant: variant }, props, { ref: ref })));
});
