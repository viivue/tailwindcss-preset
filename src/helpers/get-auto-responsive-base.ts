import {getConfig} from "./config-context";
import {getVariable} from "./getVariable";
import {ConfigTypeTheme} from "../types/theme-config";


/**
 * Create a set of base tailwind values (for suggestions, completions)
 * These values use custom CSS variables to allow for easy customization
 * Value that is references to CSS variables is skipped
 * E.g.
 * {1:1px} => {responsive-1: var(--vii-spacing-1); }
 * {2:2px} => {responsive-2: var(--vii-spacing-2); }
 * {3:var(--)} => skipped
 * {default:var(--)} => skipped
 *
 * @param baseName
 * @param postfix
 * @returns {{}}
 */
export const getAutoResponsiveBase = (baseName: string, postfix = ''): {} => {
    const themeConfig: ConfigTypeTheme = getConfig() || {};
    const baseValues: Record<string, string> = themeConfig[baseName];
    const names: Record<string, string> = {};

    // each base value will have a responsive variant
    Object.entries(baseValues).forEach(([key, value]: [string, string]) => {
        // check if the value is raw or reference to a variable
        const isVariable = value.startsWith('var(--');

        // if it's a variable, skip
        if (isVariable) {
            return;
        }

        names[`responsive-${key}${postfix}`] = `var(${getVariable(baseName, key)})`;
    });

    return names;
}