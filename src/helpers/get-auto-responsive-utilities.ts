import {getVariable} from "./getVariable";
import {ConfigTypeTheme, ResponsiveType, ScreenConfig, ScreenValue} from "../types/theme-config";
import {getConfigTheme} from "./config-context";


export const getAutoResponsiveUtilities = (baseName: string) => {
    const themeConfig: ConfigTypeTheme = getConfigTheme();

    const baseValues = themeConfig[baseName];

    const responsiveBaseName = baseName[0] === '_' ? `${baseName}Responsive` : `_${baseName}Responsive`;

    const responsive: ResponsiveType = themeConfig[responsiveBaseName];

    const responsiveOverrides: any = {};
    const appliedOverrides = new Set();

    // Sort screen keys by their max value in descending order
    const sortedScreens: [string, ScreenValue][] = (Object.entries(themeConfig.screens as ScreenConfig) as [string, ScreenValue][])
        .filter(([, value]) => value.max)
        .sort((a: [string, ScreenValue], b: [string, ScreenValue]) => parseInt(b[1].max as string) - parseInt(a[1].max as string));

    sortedScreens.forEach(([screenKey, screen]) => {
        const responsiveValues = responsive[screenKey];
        if (responsiveValues) {
            const overrides = Object.entries(responsiveValues).reduce((acc: Record<string, string>, [key, value]: [string, string]) => {
                const override = `${key}:${value}`;
                // Only add if the value is different from the default, key/value are different,
                // and this override hasn't been applied in a larger breakpoint
                if (value !== baseValues[key] &&
                    key !== value.replace('px', '') &&
                    !appliedOverrides.has(override)) {
                    acc[getVariable(baseName, key)] = value;
                    appliedOverrides.add(override);
                }
                return acc;
            }, {});

            // Only add a media query if there are overrides
            if (Object.keys(overrides).length > 0) {
                responsiveOverrides[`@media (max-width: ${screen.max})`] = {
                    ':root': overrides
                };
            }
        }
    });

    return responsiveOverrides;
};