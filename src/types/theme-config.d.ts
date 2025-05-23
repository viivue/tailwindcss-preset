import type { Config } from 'tailwindcss';

export type ResponsiveType = {
    xs?: Record<string, string>;
    sm?: Record<string, string>;
    md?: Record<string, string>;
    [key: string]: Record<string, string>;
}

export interface ConfigType extends Partial<Config> {
    fontSizeResponsive?: ResponsiveType;

  spacingResponsive?: ResponsiveType;
}

export interface ConfigTypeTheme extends ConfigType {
    _fontWeight?: Record<string, (string | number)[]>;
    fontFamily?: Record<string, string[]>;
    container?: Record<string, string>;
    [key: string]: any
}


export type ScreenValue = {
  min?: string;
  max?: string;
};

export type ScreenConfig = Record<string, ScreenValue>;
