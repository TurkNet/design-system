"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Toggle = (_a) => {
    var { variant = 'standart', name, children } = _a, props = tslib_1.__rest(_a, ["variant", "name", "children"]);
    return (react_1.default.createElement(styled_1.LabelStyled, null,
        react_1.default.createElement(styled_1.ToggleStyled, Object.assign({ type: "checkbox" }, props, { variant: variant, name: name })),
        react_1.default.createElement("span", null, children)));
};
exports.Toggle = Toggle;
