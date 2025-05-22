import { getConfig, setConfig } from "./config-context";

// index.js
import plugin from "tailwindcss/plugin";
import { themeConfigFunc } from "./config/theme.config";
import { getAutoResponsiveBase, getAutoResponsiveUtilities, getContainerComponents, getCustomCSSVariables } from "./config/utils";
import { getFontWeightExtend } from "./config/utils/get-font-weight-extend";

// @ts-ignore
import containerQueries from "@phucbm/tailwindcss-container-queries";
// @ts-ignore
import styleProps from "@phucbm/tailwindcss-style-props";
// @ts-ignore
import components from "@phucbm/tailwindcss-components";

export default function preset(config = {}) {

  setConfig(themeConfigFunc(config));
  const themeConfig: any = getConfig();

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

        addComponents(getContainerComponents(_theme) as any);

        Object.entries(themeConfig._variants).forEach(([key, value] : any) => {
          addVariant(key, value.toString());
        });
      }),

      containerQueries,
      styleProps,
      components,
    ],
  };
};
