import {getConfigTheme} from "./config-context";
import {getVariable} from "./getVariable";
import {ConfigTypeTheme} from "../types/theme-config";


export const getCustomCSSVariables = (baseName: string) => {
    const themeConfig: ConfigTypeTheme["theme"] = getConfigTheme();

    // Create base variables
    const baseVars: Record<string, string> = {};
    const baseValues: Record<string, string | []> = themeConfig[baseName];

    Object.entries(baseValues).forEach(([key, value]) => {
        if (baseName === 'fontFamily' && Array.isArray(value)) {
            value = value.join(', ');
        }

        baseVars[getVariable(baseName, key)] = value as string;
    });

    return {':root': baseVars};
};