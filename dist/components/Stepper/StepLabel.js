"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepLabel = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utility_1 = require("../../utility");
const styled_1 = require("./styled");
const Icon_1 = require("../Icon");
const StepLabel = (_a) => {
    var { title, stepIndex = 1, currentStep = 1, onClick = utility_1.noop } = _a, props = tslib_1.__rest(_a, ["title", "stepIndex", "currentStep", "onClick"]);
    const isPassive = stepIndex > currentStep;
    const isCompleted = stepIndex < currentStep;
    return (react_1.default.createElement(styled_1.StepLabelStyled, Object.assign({}, props, { onClick: () => onClick(stepIndex) }),
        react_1.default.createElement(styled_1.BulletStyled, { isPassive: isPassive, isCompleted: isCompleted }, isCompleted ? react_1.default.createElement(Icon_1.Icon, { name: "check", size: 12 }) : stepIndex),
        react_1.default.createElement(styled_1.TextStyled, { isPassive: isPassive }, title)));
};
exports.StepLabel = StepLabel;
