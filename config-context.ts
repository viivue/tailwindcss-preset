let sharedConfig: any = {};

export function setConfig(config: any) {
  sharedConfig = config;
}

export function getConfig() {
  return sharedConfig;
}