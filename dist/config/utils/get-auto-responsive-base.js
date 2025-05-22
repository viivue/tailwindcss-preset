"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutoResponsiveBase = void 0;
// import {themeConfig} from "../theme.config.mjs";
const config_context_1 = require("../../config-context");
const getVariable_1 = require("../getVariable");
/**
 * Create a set of base tailwind values (for suggestions, completions)
 * These values use custom CSS variables to allow for easy customization
 * Value that are references to CSS variables are skipped
 * E.g.
 * {1:1px} => {responsive-1:var(--vii-spacing-1);}
 * {2:2px} => {responsive-2:var(--vii-spacing-2);}
 * {3:var(--)} => skipped
 * {default:var(--)} => skipped
 *
 * @param baseName
 * @param postfix
 * @returns {{}}
 */
const getAutoResponsiveBase = (baseName, postfix = '') => {
    const themeConfig = (0, config_context_1.getConfig)() || {};
    const baseValues = themeConfig[baseName];
    const names = {};
    // each base value will have a responsive variant
    Object.entries(baseValues).forEach(([key, value]) => {
        // check if value is raw or reference to a variable
        const isVariable = value.startsWith('var(--');
        // if it's a variable, skip
        if (isVariable) {
            return;
        }
        names[`responsive-${key}${postfix}`] = `var(${(0, getVariable_1.getVariable)(baseName, key)})`;
    });
    return names;
};
exports.getAutoResponsiveBase = getAutoResponsiveBase;
