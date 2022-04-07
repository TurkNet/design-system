"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_select_1 = require("react-select");
const styled_1 = require("./styled");
let timeout = -1;
const SearchSelect = (_a) => {
    var { options = [], isSearchable = true, isMulti = false, placeholder = 'Seçiniz', variant = 'primary', labelKey = 'label', valueKey = 'id', onSearch, icon } = _a, props = tslib_1.__rest(_a, ["options", "isSearchable", "isMulti", "placeholder", "variant", "labelKey", "valueKey", "onSearch", "icon"]);
    const DropdownIndicator = props => (react_1.default.createElement(react_select_1.components.DropdownIndicator, Object.assign({}, props), icon));
    const loadOptions = (inputValue, callback) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            callback(yield onSearch(inputValue));
        }), 300);
    };
    return (react_1.default.createElement(styled_1.SearchSelectStyled, Object.assign({ components: icon ? { DropdownIndicator } : {}, cacheOptions: true, loadOptions: loadOptions, defaultOptions: options, classNamePrefix: "select", isSearchable: isSearchable, isMulti: isMulti, placeholder: placeholder, variant: variant, noOptionsMessage: () => 'Kayıt Bulunamadı.', loadingMessage: () => 'Yükleniyor..', closeMenuOnSelect: !isMulti, getOptionLabel: (o) => o[labelKey], getOptionValue: (o) => o[valueKey] }, props)));
};
exports.SearchSelect = SearchSelect;
