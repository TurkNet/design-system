"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_datepicker_1 = tslib_1.__importDefault(require("react-datepicker"));
const date_fns_1 = require("date-fns");
const Input_1 = require("../Input");
const Icon_1 = require("../Icon");
const Flex_1 = require("../Flex");
const Button_1 = require("../Button");
const styled_1 = require("./styled");
const Modal_1 = require("../Modal");
const Box_1 = require("../Box");
const years = [...Array(100).keys()].map(i => i + 1950).reverse();
const months = [
    'OCAK',
    'ŞUBAT',
    'MART',
    'NİSAN',
    'MAYIS',
    'HAZİRAN',
    'TEMMUZ',
    'AĞUSTOS',
    'EYLÜL',
    'EKİM',
    'KASIM',
    'ARALIK',
];
const formatDate = (date, dateFormat) => {
    if (!date) {
        return '';
    }
    return date_fns_1.format(date, dateFormat);
};
exports.DateInput = react_1.default.forwardRef((_a, ref) => {
    var { dateFormat = 'dd/MM/yyyy', selected = null, name, variant, onChange, selectsRange, placeholderText } = _a, props = tslib_1.__rest(_a, ["dateFormat", "selected", "name", "variant", "onChange", "selectsRange", "placeholderText"]);
    const [value, setValue] = react_1.useState(selected);
    const [show, setShow] = react_1.useState(false);
    const onHandleChange = (dates) => {
        setValue(dates);
    };
    const onToggle = () => {
        setShow(!show);
    };
    const onSelect = () => {
        onToggle();
        onChange(value || null, undefined);
        setValue(null);
    };
    const onCancel = () => {
        setShow(false);
        setValue(null);
    };
    react_1.useEffect(() => {
        if (!value) {
            setValue(selected);
        }
    });
    const formatDates = () => {
        if (Array.isArray(selected)) {
            return selected === null || selected === void 0 ? void 0 : selected.map(date => formatDate(date, dateFormat)).filter(i => i).join(' - ');
        }
        return formatDate(selected, dateFormat);
    };
    let opts = { selected: value };
    if (selectsRange) {
        opts = {
            selectsRange,
            startDate: value === null || value === void 0 ? void 0 : value[0],
            endDate: value === null || value === void 0 ? void 0 : value[1],
        };
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Input_1.Input, { onClick: onToggle, value: formatDates(), onChange: () => { }, icon: react_1.default.createElement(Icon_1.Icon, { name: "date_range", color: "grey.600" }), autoComplete: "off", placeholder: placeholderText, name: name, variant: variant, ref: ref }),
        react_1.default.createElement(Modal_1.Modal, { show: show, showCloseIcon: false, onClosed: onCancel },
            react_1.default.createElement(styled_1.ContainerStyled, null,
                react_1.default.createElement(react_datepicker_1.default, Object.assign({ inline: true, fixedHeight: true, dateFormat: dateFormat, showDisabledMonthNavigation: true }, props, opts, { onChange: onHandleChange, renderCustomHeader: ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, }) => (react_1.default.createElement(Flex_1.Flex, { justifyContent: "space-between", p: 10 },
                        react_1.default.createElement("select", { value: months[new Date(date).getMonth()], onChange: ({ target: { value } }) => changeMonth(months.indexOf(value)) }, months.map(option => (react_1.default.createElement("option", { key: option, value: option }, option)))),
                        react_1.default.createElement("select", { value: new Date(date).getFullYear(), onChange: ({ target: { value } }) => changeYear(+value) }, years.map(option => (react_1.default.createElement("option", { key: option, value: option }, option)))),
                        react_1.default.createElement(Flex_1.Flex, null,
                            react_1.default.createElement(Button_1.Button, { variant: "ghost", size: "small", icon: react_1.default.createElement(Icon_1.Icon, { name: "chevron_left" }), onClick: decreaseMonth, disabled: prevMonthButtonDisabled, p: 8, type: "button" }),
                            react_1.default.createElement(Button_1.Button, { variant: "ghost", size: "small", icon: react_1.default.createElement(Icon_1.Icon, { name: "chevron_right" }), onClick: increaseMonth, disabled: nextMonthButtonDisabled, p: 8, type: "button" })))) }))),
            react_1.default.createElement(Box_1.Box, { height: 1, bg: "grey.300" }),
            react_1.default.createElement(Flex_1.Flex, { px: 16, py: 8, justifyContent: "flex-end" },
                react_1.default.createElement(Button_1.Button, { type: "button", size: "medium", variant: "ghost", mr: 8, onClick: onCancel }, "Vazge\u00E7"),
                react_1.default.createElement(Button_1.Button, { type: "button", size: "medium", onClick: onSelect }, "Tamam")))));
});
