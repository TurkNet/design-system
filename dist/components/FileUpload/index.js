"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const styled_1 = require("./styled");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
const Typography_1 = require("../Typography");
const utility_1 = require("../../utility");
const Box_1 = require("../Box");
const FileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
const MaxSize = 10;
const FileUpload = ({ onUpload = utility_1.noop, multiple = false, maxSize = MaxSize, accept = FileTypes, onlyButton, label = 'Resmi tutup, sürükleyin veya', }) => {
    const inputRef = react_1.default.createRef();
    const [files, setFiles] = react_1.useState([]);
    const [variant, setVariant] = react_1.useState('sky');
    const [dragCounter, setDragCounter] = react_1.useState(0);
    const onlyUnique = (file, index, self) => {
        const item = self.find(item => item.name === file.name);
        return self.indexOf(item) === index;
    };
    const getValidFiles = (fileList, items) => {
        const allFiles = [...fileList, ...(multiple ? files : [])];
        const totalSize = allFiles.reduce((t, f) => t + f.size, 0);
        let isValitType = true;
        const list = [...allFiles, ...(items || [])];
        list.forEach(file => {
            if (accept.indexOf(file.type) === -1) {
                isValitType = false;
            }
        });
        const accessSize = totalSize < maxSize * 1024 * 1024;
        const accessMultiple = multiple && allFiles.length > 0;
        const accessSingle = !multiple && list.length === 1;
        if (isValitType && accessSize && (accessMultiple || accessSingle)) {
            return (items === null || items === void 0 ? void 0 : items.length)
                ? [new File([], 'empty')]
                : allFiles.filter(onlyUnique);
        }
        return null;
    };
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter + 1);
        const { files, items } = e.dataTransfer;
        const validFiles = getValidFiles(files, items);
        let variant = 'danger';
        if (validFiles === null || validFiles === void 0 ? void 0 : validFiles.length) {
            variant = 'success';
        }
        setVariant(variant);
    };
    const handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter - 1);
        if (dragCounter - 1 === 0) {
            setVariant('sky');
        }
    };
    const handleDrop = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        const transferFiles = evt.dataTransfer.files;
        const validFiles = getValidFiles(transferFiles);
        if (validFiles === null || validFiles === void 0 ? void 0 : validFiles.length) {
            onUpload(validFiles);
            setFiles(validFiles);
            evt.dataTransfer.clearData();
            setDragCounter(0);
        }
        setVariant('sky');
    };
    const handleChooseUpload = (e) => {
        const chooseFiles = e.target.files;
        const validFiles = getValidFiles(chooseFiles);
        if (validFiles === null || validFiles === void 0 ? void 0 : validFiles.length) {
            onUpload(validFiles);
            setFiles(validFiles);
        }
        e.target.value = '';
    };
    const deleteFile = (file) => () => {
        const list = files.filter(item => item.name !== file.name);
        onUpload(list);
        setFiles(list);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_1.FileUploadStyled, { onDragEnter: handleDragIn, onDragLeave: handleDragOut, onDragOver: handleDrag, onDrop: handleDrop, variant: variant },
            !onlyButton && react_1.default.createElement("span", null, label),
            react_1.default.createElement("input", { ref: inputRef, onChange: handleChooseUpload, multiple: multiple, accept: accept.join(','), type: "file" }),
            react_1.default.createElement("button", { type: "button", onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, "Y\u00FCkleyin")),
        files.map((file) => (react_1.default.createElement(Flex_1.Flex, { key: file.lastModified, justifyContent: "space-between", alignItems: "center", mt: 16 },
            react_1.default.createElement(Flex_1.Flex, { alignItems: "center" },
                react_1.default.createElement(Icon_1.Icon, { name: "check_circle", color: "success.normal", size: 20 }),
                react_1.default.createElement(Box_1.Box, { flex: "1 1 100%" },
                    react_1.default.createElement(Typography_1.Typography, { ml: 10 }, file.name))),
            react_1.default.createElement(Icon_1.Icon, { name: "close", color: "sky.dark", size: 20, cursor: "pointer", onClick: deleteFile(file) }))))));
};
exports.FileUpload = FileUpload;
