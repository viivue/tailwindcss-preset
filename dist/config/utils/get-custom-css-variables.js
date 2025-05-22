"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomCSSVariables = void 0;
const config_context_1 = require("../../config-context");
const getVariable_1 = require("../getVariable");
const getCustomCSSVariables = (baseName) => {
    const themeConfig = (0, config_context_1.getConfig)() || {};
    // Create base variables
    const baseVars = {};
    const baseValues = themeConfig[baseName];
    Object.entries(baseValues).forEach(([key, value]) => {
        if (baseName === 'fontFamily' && Array.isArray(value)) {
            value = value.join(', ');
        }
        baseVars[(0, getVariable_1.getVariable)(baseName, key)] = value;
    });
    return { ':root': baseVars };
};
exports.getCustomCSSVariables = getCustomCSSVariables;
