"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.get = exports.noop = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./styled"), exports);
const noop = (...p) => { };
exports.noop = noop;
const get = (obj, path, defaultValue = undefined) => {
    const paths = path.split('.');
    let current = obj;
    for (let i = 0; i < paths.length; i += 1) {
        if (current[paths[i]] === undefined) {
            return defaultValue;
        }
        current = current[paths[i]];
    }
    return current || defaultValue;
};
exports.get = get;
const map = (source, iterator) => {
    const target = typeof source === 'number' ? [...Array(source).keys()] : source;
    return target.map(iterator);
};
exports.map = map;
