import { ConfigTypeTheme } from "../types/theme-config";

/**
 * Add specific set of font weight for each font family
 * @returns {{}}
 */
export const getFontWeightExtend = (themeConfig: ConfigTypeTheme) => {
    const fontWeight = themeConfig._fontWeight;
    const fontFamilies = themeConfig.fontFamily;

    if(!fontWeight || !fontFamilies){
        console.warn(`Missing fontWeight or fontFamily.`);
        return {};
    }

    return Object.entries(fontWeight).reduce((acc: Record<string, string | number>, [fontFamily, fontWeights]) => {
        // check if font family is existed in config
        if(!fontFamilies.hasOwnProperty(fontFamily)){
            console.warn(`[fontWeight] "${fontFamily}" is not defined in the fontFamily and will be ignored.`);
            return acc;
        }

        fontWeights.forEach((weight: string | number) => {
            acc[`${fontFamily}-${weight}`] = weight;
        });

        return acc;
    }, {});
}