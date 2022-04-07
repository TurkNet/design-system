"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Collapse_1 = require("../Collapse");
const Icon_1 = require("../Icon");
const styled_1 = require("./styled");
const utility_1 = require("../../utility");
const AccordionItem = (_a) => {
    var { summary, children, defaultExpanded = false, expandedId, id, onExpand = utility_1.noop, onToggle = utility_1.noop } = _a, props = tslib_1.__rest(_a, ["summary", "children", "defaultExpanded", "expandedId", "id", "onExpand", "onToggle"]);
    const [expanded, setExpanded] = react_1.useState(defaultExpanded);
    react_1.useEffect(() => {
        setExpanded(defaultExpanded);
    }, [defaultExpanded]);
    react_1.useEffect(() => {
        if (expandedId && id)
            setExpanded(expandedId === id);
    }, [expandedId, id]);
    const handleExpanded = () => {
        if (id) {
            onExpand(id);
        }
        else {
            onToggle(!expanded);
            setExpanded(!expanded);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_1.SummaryStyled, Object.assign({}, props, { onClick: handleExpanded }),
            summary,
            react_1.default.createElement(Icon_1.Icon, { name: expanded ? 'expand_less' : 'expand_more' })),
        react_1.default.createElement(Collapse_1.Collapse, { expanded: expanded }, children),
        react_1.default.createElement(styled_1.BorderStyled, { expanded: expanded })));
};
exports.default = AccordionItem;
