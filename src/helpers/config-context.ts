import {ConfigTypeTheme} from "../types/theme-config";

let sharedConfig: ConfigTypeTheme = {};

export function setConfig(config: ConfigTypeTheme) {
    sharedConfig = config;
}

export function getConfigTheme():  NonNullable<ConfigTypeTheme["theme"]> {
    return sharedConfig.theme || {};
}

export function getConfigPrefix(): string {
    return getConfigTheme()?.prefix || '';
}