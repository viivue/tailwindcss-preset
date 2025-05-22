import { getConfig } from "../../config-context";
import {getVariable} from "../getVariable";


export const getCustomCSSVariables = (baseName: string) => {
    const themeConfig: any = getConfig() || {};
    
    // Create base variables
    const baseVars: any = {};
    const baseValues = themeConfig[baseName];

    Object.entries(baseValues).forEach(([key, value]) => {
        if(baseName === 'fontFamily' && Array.isArray(value)){
            value = value.join(', ');
        }

        baseVars[getVariable(baseName, key)] = value;
    });

    return {':root': baseVars};
};