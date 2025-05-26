import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { Config } from 'tailwindcss';

type ResponsiveType = {
    xs?: Record<string, string>;
    sm?: Record<string, string>;
    md?: Record<string, string>;
    [key: string]: Record<string, string>;
}

interface ConfigType extends Partial<Config> {
    fontSizeResponsive?: ResponsiveType;

  spacingResponsive?: ResponsiveType;
}

declare function preset(config: ConfigType): {
    theme: {
        screens: any;
        containers: any;
        fontWeight: {};
        container: {
            center: boolean;
            padding: string;
            screens: {
                lg: any;
            };
        };
        extend: {
            spacing: () => {};
            fontSize: () => {};
            fontWeight: () => {};
        };
        _fontWeight?: Record<string, (string | number)[]>;
        fontFamily?: Record<string, string[]>;
        fontSizeResponsive?: ResponsiveType;
        spacingResponsive?: ResponsiveType;
        content?: tailwindcss_types_config.ContentConfig | undefined;
        important?: Partial<tailwindcss_types_config.ImportantConfig> | undefined;
        prefix?: string | undefined;
        separator?: string | undefined;
        safelist?: tailwindcss_types_config.SafelistConfig[] | undefined;
        blocklist?: string[] | undefined;
        presets?: Partial<tailwindcss_types_config.Config>[] | undefined;
        future?: Partial<tailwindcss_types_config.FutureConfig> | undefined;
        experimental?: Partial<tailwindcss_types_config.ExperimentalConfig> | undefined;
        darkMode?: Partial<tailwindcss_types_config.DarkModeConfig> | undefined;
        theme?: Partial<tailwindcss_types_config.CustomThemeConfig & {
            extend: Partial<tailwindcss_types_config.CustomThemeConfig>;
        }> | undefined;
        corePlugins?: Partial<tailwindcss_types_config.CorePluginsConfig> | undefined;
        plugins?: (tailwindcss_types_config.PluginCreator | {
            handler: tailwindcss_types_config.PluginCreator;
            config?: Partial<tailwindcss_types_config.Config> | undefined;
        } | {
            (options: any): {
                handler: tailwindcss_types_config.PluginCreator;
                config?: Partial<tailwindcss_types_config.Config> | undefined;
            };
            __isOptionsFunction: true;
        } | undefined)[] | undefined;
    };
    safelist: string[];
    plugins: any[];
};

export { preset as default };
