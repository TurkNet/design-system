"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Flex_1 = require("../Flex");
const Button_1 = require("../Button");
const Checkbox_1 = require("../Checkbox");
const utility_1 = require("../../utility");
const Icon_1 = require("../Icon");
const Loader_1 = require("../Loader");
const Typography_1 = require("../Typography");
const styled_1 = require("./styled");
const SortMap = {
    asc: 'desc',
    desc: 'asc',
    undefined: 'desc',
};
const Table = (_a) => {
    var { rowId = 'id', rows = [], columns = [], selectable, enableAdd, buttonText = 'Add', onAddClick, onSort = utility_1.noop, onCheck = utility_1.noop, loading } = _a, props = tslib_1.__rest(_a, ["rowId", "rows", "columns", "selectable", "enableAdd", "buttonText", "onAddClick", "onSort", "onCheck", "loading"]);
    const [sort, setSort] = react_1.useState({});
    const [checked, setChecked] = react_1.useState({ all: false });
    const handleSort = (accessor) => () => {
        const updateSort = Object.assign(Object.assign({}, sort), { [accessor]: SortMap[sort[accessor]] });
        setSort(updateSort);
        onSort(updateSort);
    };
    const handleChecked = (row) => (event) => {
        setChecked(Object.assign(Object.assign({}, checked), { [row[rowId]]: event.target.checked, all: false }));
    };
    const onCheckAll = (event) => {
        if (!event.target.checked) {
            setChecked({ all: false });
        }
        else {
            setChecked(rows.reduce((obj, r) => (Object.assign(Object.assign({}, obj), { [r.id]: true })), {
                all: true,
            }));
        }
    };
    react_1.useEffect(() => {
        onCheck(rows.filter(r => checked[r[rowId]]));
    }, [checked]);
    return (react_1.default.createElement(styled_1.Wrapped, null,
        react_1.default.createElement(styled_1.TableStyled, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement(styled_1.TableTrStyled, null,
                    selectable && (react_1.default.createElement(styled_1.TableThStyled, { style: { width: 150 } },
                        react_1.default.createElement(Flex_1.Flex, null,
                            react_1.default.createElement(Checkbox_1.Checkbox, { checked: checked.all, onChange: onCheckAll }),
                            "T\u00FCm\u00FCn\u00FC Se\u00E7"))), columns === null || columns === void 0 ? void 0 :
                    columns.map((column) => {
                        return (react_1.default.createElement(styled_1.TableThStyled, { key: column.accessor, style: { width: column.width }, sortable: column.sortable, onClick: column.sortable && handleSort(column.accessor) },
                            react_1.default.createElement("span", null,
                                " ",
                                column.Header),
                            column.sortable && (react_1.default.createElement(Icon_1.Icon, { name: SortMap[sort[column.accessor]] === 'desc'
                                    ? 'expand_more'
                                    : 'expand_less' }))));
                    }))),
            loading ? (react_1.default.createElement(styled_1.TableTrStyled, null,
                react_1.default.createElement(styled_1.TableTdStyled, { colSpan: columns.length + 1 },
                    react_1.default.createElement(Flex_1.Flex, { justifyContent: "center", flexDirection: "column", alignItems: "center", width: 1 },
                        react_1.default.createElement(styled_1.TableLoading, null,
                            react_1.default.createElement(Loader_1.CircleLoader, null)))))) : (react_1.default.createElement("tbody", null,
                (enableAdd || !(rows === null || rows === void 0 ? void 0 : rows.length)) && (react_1.default.createElement(styled_1.TableTrStyled, null,
                    react_1.default.createElement(styled_1.TableTdStyled, { colSpan: columns.length + 1 },
                        react_1.default.createElement(Flex_1.Flex, { justifyContent: "center", flexDirection: "column", alignItems: "center", width: 1 },
                            enableAdd && (react_1.default.createElement(Button_1.Button, { variant: "ghost", onClick: onAddClick, icon: react_1.default.createElement(Icon_1.Icon, { name: "add" }), alignment: "left" }, buttonText)),
                            !(rows === null || rows === void 0 ? void 0 : rows.length) && (react_1.default.createElement(Typography_1.Typography, { variant: "paragraph1", my: 60 }, "No data available")))))), rows === null || rows === void 0 ? void 0 :
                rows.map((row) => (react_1.default.createElement(styled_1.TableTrStyled, { key: row[rowId] },
                    selectable && (react_1.default.createElement(styled_1.TableTdStyled, null,
                        react_1.default.createElement(Checkbox_1.Checkbox, { checked: checked[row[rowId]] || false, onChange: handleChecked(row) }))),
                    columns.map((column) => {
                        const CellRender = props[column.accessor];
                        return (react_1.default.createElement(styled_1.TableTdStyled, { key: column.accessor }, column.custom && CellRender ? (react_1.default.createElement(CellRender, { column: column, row: row })) : (row[column.accessor])));
                    })))))))));
};
exports.Table = Table;
