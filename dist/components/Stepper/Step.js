"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const Step = (_a) => {
    var { children, stepIndex, currentStep, vertical = false } = _a, props = tslib_1.__rest(_a, ["children", "stepIndex", "currentStep", "vertical"]);
    return (react_1.default.createElement(styled_1.StepStyled, Object.assign({}, props, { vertical: vertical }), stepIndex === currentStep && children));
};
exports.Step = Step;
