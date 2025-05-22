"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = preset;
const config_context_1 = require("./config-context");
// index.js
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const theme_config_1 = require("./config/theme.config");
const utils_1 = require("./config/utils");
const get_font_weight_extend_1 = require("./config/utils/get-font-weight-extend");
// @ts-ignore
const tailwindcss_container_queries_1 = __importDefault(require("@phucbm/tailwindcss-container-queries"));
// @ts-ignore
const tailwindcss_style_props_1 = __importDefault(require("@phucbm/tailwindcss-style-props"));
// @ts-ignore
const tailwindcss_components_1 = __importDefault(require("@phucbm/tailwindcss-components"));
function preset(config = {}) {
    (0, config_context_1.setConfig)((0, theme_config_1.themeConfigFunc)(config));
    const themeConfig = (0, config_context_1.getConfig)();
    return {
        theme: Object.assign(Object.assign({}, themeConfig), { screens: themeConfig.screens, containers: themeConfig.screens, fontWeight: {}, container: {
                center: true,
                padding: "theme(space.responsive-gap-container)",
                screens: {
                    lg: themeConfig._container.default,
                },
            }, extend: {
                spacing: () => (0, utils_1.getAutoResponsiveBase)("spacing"),
                fontSize: () => (0, utils_1.getAutoResponsiveBase)("fontSize"),
                fontWeight: () => (0, get_font_weight_extend_1.getFontWeightExtend)(themeConfig),
            } }),
        safelist: [
            "container",
            "container-small",
            "container-fluid",
            "loading",
            "overscroll-y-none",
            "sr-only",
        ],
        plugins: [
            (0, plugin_1.default)(({ addUtilities, addComponents, addVariant, config, theme }) => {
                const _theme = config().theme;
                addUtilities((0, utils_1.getCustomCSSVariables)("colors"));
                addUtilities((0, utils_1.getCustomCSSVariables)("fontSize"));
                addUtilities((0, utils_1.getCustomCSSVariables)("fontFamily"));
                addUtilities((0, utils_1.getCustomCSSVariables)("spacing"));
                addUtilities((0, utils_1.getAutoResponsiveUtilities)("spacing"));
                addUtilities((0, utils_1.getAutoResponsiveUtilities)("fontSize"));
                addComponents((0, utils_1.getContainerComponents)(_theme));
                Object.entries(themeConfig._variants).forEach(([key, value]) => {
                    addVariant(key, value.toString());
                });
            }),
            tailwindcss_container_queries_1.default,
            tailwindcss_style_props_1.default,
            tailwindcss_components_1.default,
        ],
    };
}
;
