"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_select_1 = require("react-select");
const styled_1 = require("./styled");
const Select = (_a) => {
    var { options = [], isSearchable = true, isMulti = false, placeholder = 'Seçiniz', variant = 'primary', labelKey = 'label', valueKey = 'id', locale = 'tr-TR', icon } = _a, props = tslib_1.__rest(_a, ["options", "isSearchable", "isMulti", "placeholder", "variant", "labelKey", "valueKey", "locale", "icon"]);
    const [filteredOptions, setFilteredOptions] = react_1.useState(options);
    const DropdownIndicator = props => (react_1.default.createElement(react_select_1.components.DropdownIndicator, Object.assign({}, props), icon));
    const trToEng = (text) => String(text)
        .toLocaleLowerCase(locale)
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c');
    return (react_1.default.createElement(styled_1.SelectStyled, Object.assign({ classNamePrefix: "select", isSearchable: isSearchable, isMulti: isMulti, options: filteredOptions, placeholder: placeholder, variant: variant, components: icon ? { DropdownIndicator } : {}, noOptionsMessage: () => 'Kayıt Bulunamadı.', closeMenuOnSelect: !isMulti, getOptionLabel: (o) => o[labelKey], getOptionValue: (o) => o[valueKey], filterOption: (opt, inputValue) => trToEng(opt.label).includes(trToEng(inputValue)), onInputChange: inputValue => {
            setFilteredOptions(filteredOptions.sort((a, b) => trToEng(b[labelKey]).startsWith(trToEng(inputValue)) ? 1 : -1));
        } }, props)));
};
exports.Select = Select;
