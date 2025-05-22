import { getConfig, setConfig } from "./config-context";

// index.js
const plugin = require("tailwindcss/plugin");
const { themeConfigFunc } = require("./config/theme.config.mjs");
const {
  getAutoResponsiveBase,
  getAutoResponsiveUtilities,
  getContainerComponents,
  getCustomCSSVariables,
} = require("./config/utils");
const { getFontWeightExtend } = require("./config/utils/get-font-weight-extend.mjs");

export default function preset(config = {}) {

  setConfig(themeConfigFunc(config));
  const themeConfig = getConfig();

  return {
    theme: {
      ...themeConfig,
      screens: themeConfig.screens,
      containers: themeConfig.screens,
      fontWeight: {},

      container: {
        center: true,
        padding: "theme(space.responsive-gap-container)",
        screens: {
          lg: themeConfig._container.default,
        },
      },

      extend: {
        spacing: () => getAutoResponsiveBase("spacing"),
        fontSize: () => getAutoResponsiveBase("fontSize"),
        fontWeight: () => getFontWeightExtend(themeConfig),
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
      plugin(({ addUtilities, addComponents, addVariant, config, theme }) => {
        const _theme = config().theme;

        addUtilities(getCustomCSSVariables("colors"));
        addUtilities(getCustomCSSVariables("fontSize"));
        addUtilities(getCustomCSSVariables("fontFamily"));
        addUtilities(getCustomCSSVariables("spacing"));

        addUtilities(getAutoResponsiveUtilities("spacing"));
        addUtilities(getAutoResponsiveUtilities("fontSize"));

        addComponents(getContainerComponents(_theme));

        Object.entries(themeConfig._variants).forEach(([key, value]) => {
          addVariant(key, value.toString());
        });
      }),

      require("@phucbm/tailwindcss-container-queries"),
      require("@phucbm/tailwindcss-style-props"),
      require("@phucbm/tailwindcss-components"),
    ],
  };
};
