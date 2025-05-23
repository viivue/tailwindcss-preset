"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = setConfig;
exports.getConfig = getConfig;
let sharedConfig = {};
function setConfig(config) {
    sharedConfig = config;
}
function getConfig() {
    return sharedConfig;
}
