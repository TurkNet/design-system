"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const styled_1 = require("./styled");
const StepLabel_1 = require("./StepLabel");
const utility_1 = require("../../utility");
tslib_1.__exportStar(require("./Step"), exports);
tslib_1.__exportStar(require("./StepLabel"), exports);
const Stepper = (_a) => {
    var { labels = [], currentStep = 1, dense, onChange = utility_1.noop, children } = _a, props = tslib_1.__rest(_a, ["labels", "currentStep", "dense", "onChange", "children"]);
    return (react_1.default.createElement(styled_1.StepperStyled, Object.assign({}, props), labels.map((item, index) => {
        const { title } = item;
        const stepIndex = index + 1;
        const hideTitle = dense && stepIndex !== currentStep;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(StepLabel_1.StepLabel, { currentStep: currentStep, stepIndex: stepIndex, title: !hideTitle && title, onClick: () => onChange(stepIndex) }),
            react_1.default.createElement(styled_1.LineStyled, null)));
    })));
};
exports.Stepper = Stepper;
