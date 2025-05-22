import {configPropertyName} from "./config";
import {baseSpacing} from "./spacing";
import { getConfig } from "../config-context";

export const getVariable = (baseName: string, key: string) => {
    const themePrefix = (getConfig() as any).prefix || '';

    const propertyName = configPropertyName[baseName];

    return `--${themePrefix}${propertyName}-${key}`;
}


export const getFontSize = (key: string) => {
    return `var(${getVariable('fontSize', key)})`;
}

export const getSpacing = (value: any) => {
    if(!value){
        console.log(`WARNING: Value ${value} is invalid.`)
        return '/* invalid value, please check theme.config.spacing */';
    }

    const key = value.replace('px', '');

    // check if key is exist
    if(!(baseSpacing)[key]){
        const fallbackValue = `${parseInt(key)}px`;

        console.log(`WARNING: ${key} is not exists in base spacing, use ${fallbackValue} instead.`)

        return fallbackValue;
    }

    return `var(${getVariable('spacing', key)})`;
};