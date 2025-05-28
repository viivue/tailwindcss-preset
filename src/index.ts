import {setConfig} from "./helpers/config-context";

// index.js
import plugin from "tailwindcss/plugin";
import {
    getAutoResponsiveBase,
    getAutoResponsiveUtilities,
    getContainerComponents,
    getCustomCSSVariables,
    getFontWeightExtend
} from "./helpers";
import {ConfigType, ConfigTypeTheme} from "./types/theme-config"

// @ts-ignore
import containerQueries from "@phucbm/tailwindcss-container-queries";
// @ts-ignore
import styleProps from "@phucbm/tailwindcss-style-props";
// @ts-ignore
import components from "@phucbm/tailwindcss-components";
import * as spacing from "./spacing";

export function viivuePreset(config: ConfigType = {}) {

    const _config: ConfigTypeTheme = {
        theme: {
            prefix: config.prefix || "",
            // ...themeConfig,
            backgroundImage: {...config.backgroundImage},
            // screens: themeConfig.screens,
            screens: {...config.screens},
            colors: {...config.colors},
            fontFamily: {...config.fontFamily},
            containers: {...config.screens},
            _fontWeight: {...config.fontWeight},
            fontWeight: {},
            fontSize: {
                ...config.fontSize,

                // sample usage with function
                // body: getFontSize(15),
            },
            _fontSizeResponsive: {...config.fontSizeResponsive},

            spacing: {
                // Create new spacing
                // key: value

                // Create new spacing that use auto responsive variable
                // key: getVar(spacing.baseSpacing["104"])

                // Add base spacings (fixed value)
                // the list of spacing values can be found in presets/spacing.mjs
                // we manage the spacing values in another file as it can be quite long
                ...spacing.baseSpacing,

                ...config.spacing,
            },

            _spacingResponsive: {
                md: {...spacing.responsive?.md, ...config.spacingResponsive?.md},
                sm: {...spacing.responsive?.sm, ...config.spacingResponsive?.sm},
                xs: {...spacing.responsive?.xs, ...config.spacingResponsive?.xs},
            },

            _container: {...config.container},

            container: {
                center: true,
                padding: "theme(space.responsive-gap-container)",
                screens: {
                    lg: {...config.container}.default,
                },
            },

            _variants: {...config.variants},

            extend: {
                spacing: () => getAutoResponsiveBase("spacing"),
                fontSize: () => getAutoResponsiveBase("fontSize"),
                fontWeight: () => getFontWeightExtend({
                    fontFamily: {...config.fontFamily},
                    _fontWeight: {...config.fontWeight},
                }),
            },
        },

        safelist: [
            "container",
            "container-small",
            "container-fluid",
            "loading",
            "overscroll-y-none",
            "sr-only",
        ],

        plugins: [
            plugin(({addUtilities, addComponents, addVariant, config: configPlugin}) => {
                const _theme = configPlugin().theme;

                addUtilities(getCustomCSSVariables("colors"));
                addUtilities(getCustomCSSVariables("fontSize"));
                addUtilities(getCustomCSSVariables("fontFamily"));
                addUtilities(getCustomCSSVariables("spacing"));

                addUtilities(getAutoResponsiveUtilities("spacing"));
                addUtilities(getAutoResponsiveUtilities("fontSize"));

                addComponents(getContainerComponents(_theme));

                Object.entries({...config.variants}).forEach(([key, value]: [string, string]) => {
                    addVariant(key, value.toString());
                });
            }),

            containerQueries,
            styleProps,
            components,
        ],
    };

    setConfig(_config);

    return _config;
}
