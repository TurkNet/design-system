"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const styled_1 = require("./styled");
const Popover = (_a) => {
    var { variant = 'right', title, content, children } = _a, props = tslib_1.__rest(_a, ["variant", "title", "content", "children"]);
    const [show, setShow] = react_1.useState(false);
    let timer;
    const handleShow = react_1.useCallback(() => {
        clearTimeout(timer);
        if (show) {
            timer = setTimeout(() => {
                setShow(false);
            }, 300);
        }
        if (!show) {
            setShow(true);
        }
    }, [show]);
    return (react_1.default.createElement(styled_1.PopoverStyled, Object.assign({}, props, { onMouseEnter: () => setShow(true), onClick: () => setShow(true), onMouseLeave: handleShow }),
        children,
        show && (react_1.default.createElement(styled_1.Overlay, { variant: variant, open: true, show: show }, content))));
};
exports.Popover = Popover;
