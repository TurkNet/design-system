"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_slick_1 = tslib_1.__importDefault(require("react-slick"));
const NextArrow_1 = tslib_1.__importDefault(require("./NextArrow"));
const PrevArrow_1 = tslib_1.__importDefault(require("./PrevArrow"));
const styled_1 = require("./styled");
class Carousel extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.onNext = () => {
            if (this.slider.current) {
                this.slider.current.slickNext();
            }
        };
        this.onPrevious = () => {
            if (this.slider.current) {
                this.slider.current.slickPrev();
            }
        };
        this.slider = react_1.default.createRef();
    }
    render() {
        const _a = this.props, { children, speed = 300, variant = 'standart' } = _a, props = tslib_1.__rest(_a, ["children", "speed", "variant"]);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_slick_1.default, Object.assign({ speed: speed }, props, { nextArrow: react_1.default.createElement(NextArrow_1.default, null), prevArrow: react_1.default.createElement(PrevArrow_1.default, null), ref: this.slider }), children),
            react_1.default.createElement(styled_1.SlickSliderCss, { variant: variant })));
    }
}
exports.Carousel = Carousel;
