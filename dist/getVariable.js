"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpacing = exports.getFontSize = exports.getVariable = void 0;
const config_1 = require("./config");
const spacing_1 = require("./spacing");
const config_context_1 = require("./helpers/config-context");
const getVariable = (baseName, key) => {
    const themePrefix = (0, config_context_1.getConfig)().prefix || '';
    const propertyName = config_1.configPropertyName[baseName];
    return `--${themePrefix}${propertyName}-${key}`;
};
exports.getVariable = getVariable;
const getFontSize = (key) => {
    return `var(${(0, exports.getVariable)('fontSize', key)})`;
};
exports.getFontSize = getFontSize;
const getSpacing = (value) => {
    if (!value) {
        console.log(`WARNING: Value ${value} is invalid.`);
        return '/* invalid value, please check theme.config.spacing */';
    }
    const key = value.replace('px', '');
    // check if key is exist
    if (!(spacing_1.baseSpacing)[key]) {
        const fallbackValue = `${parseInt(key)}px`;
        console.log(`WARNING: ${key} is not exists in base spacing, use ${fallbackValue} instead.`);
        return fallbackValue;
    }
    return `var(${(0, exports.getVariable)('spacing', key)})`;
};
exports.getSpacing = getSpacing;
