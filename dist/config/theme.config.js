"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeConfigFunc = void 0;
const spacing = __importStar(require("./spacing"));
/**
 * Tailwind theme config
 */
const themeConfigFunc = (config) => {
    var _a, _b, _c, _d, _e, _f;
    return {
        backgroundImage: Object.assign({}, config.backgroundImage),
        colors: Object.assign({}, config.colors),
        fontFamily: Object.assign({}, config.fontFamily),
        // assign available font weight for each font family here
        // example output: font-primary-400
        _fontWeight: Object.assign({}, config.fontWeight),
        fontSize: Object.assign({}, config.fontSize),
        _fontSizeResponsive: Object.assign({}, config.fontSizeResponsive),
        spacing: Object.assign(Object.assign({}, spacing.baseSpacing), config.spacing),
        // Add auto responsive values here
        // space.responsive-gap-container
        _spacingResponsive: {
            md: Object.assign(Object.assign({}, (_a = spacing.responsive) === null || _a === void 0 ? void 0 : _a.md), (_b = config.spacingResponsive) === null || _b === void 0 ? void 0 : _b.md),
            sm: Object.assign(Object.assign({}, (_c = spacing.responsive) === null || _c === void 0 ? void 0 : _c.sm), (_d = config.spacingResponsive) === null || _d === void 0 ? void 0 : _d.sm),
            xs: Object.assign(Object.assign({}, (_e = spacing.responsive) === null || _e === void 0 ? void 0 : _e.xs), (_f = config.spacingResponsive) === null || _f === void 0 ? void 0 : _f.xs),
        },
        _container: Object.assign({}, config.container),
        screens: Object.assign({}, config.screens),
        _variants: Object.assign({}, config.variants),
    };
};
exports.themeConfigFunc = themeConfigFunc;
