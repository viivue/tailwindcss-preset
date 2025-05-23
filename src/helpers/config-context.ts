import { ConfigType, ConfigTypeTheme } from "../types/theme-config";

let sharedConfig: ConfigTypeTheme = {};

export function setConfig(config: ConfigTypeTheme) {
  sharedConfig = config;
}

export function getConfig() {
  return sharedConfig;
}