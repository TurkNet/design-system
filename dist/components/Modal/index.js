"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_dom_1 = tslib_1.__importDefault(require("react-dom"));
const utility_1 = require("../../utility");
const styled_1 = require("./styled");
const Icon_1 = require("../Icon");
const modalId = 'design-system-modal';
let modalRoot;
const Modal = ({ children, show: initialShow = false, width, maxWidth = '90%', height, showCloseIcon = true, onClosed = utility_1.noop, closeOnClickOutside = true, }) => {
    const [show, setShow] = react_1.useState(initialShow);
    react_1.useEffect(() => {
        setShow(initialShow);
    }, [initialShow]);
    react_1.useEffect(() => {
        if (!document.getElementById(modalId)) {
            if (!modalRoot) {
                modalRoot = document.createElement('div');
                modalRoot.style.position = 'relative';
                modalRoot.style.zIndex = '1050';
                modalRoot.tabIndex = -1;
                modalRoot.id = modalId;
            }
            document.body.appendChild(modalRoot);
        }
    }, []);
    const onClose = () => {
        onClosed();
    };
    if (!show || !children) {
        return null;
    }
    return react_dom_1.default.createPortal(react_1.default.createElement(styled_1.ModalStyled, null,
        react_1.default.createElement(styled_1.ModalBgStyled, { onClick: () => closeOnClickOutside && onClose() }),
        react_1.default.createElement(styled_1.ModalContentStyled, { width: width, height: height, maxWidth: maxWidth, maxHeight: "90%" },
            showCloseIcon && (react_1.default.createElement(styled_1.CrossIconStyled, null,
                react_1.default.createElement(Icon_1.Icon, { name: "close", fontSize: 24, onClick: onClose }))),
            children),
        react_1.default.createElement(styled_1.ModalGlobalStyle, null)), modalRoot);
};
exports.Modal = Modal;
