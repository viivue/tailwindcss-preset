"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContainerComponents = void 0;
const config_context_1 = require("./config-context");
const getContainerComponents = (theme) => {
    var _a;
    const themePrefix = ((_a = (0, config_context_1.getConfig)()) === null || _a === void 0 ? void 0 : _a.prefix) || "";
    if (theme === null || theme === void 0 ? void 0 : theme._container) {
        const gapSideVar = `--${themePrefix}gap-side`;
        const containerVars = {};
        const containerClass = {};
        const gapContainer = 'theme(space.responsive-gap-container)';
        const containerProps = {
            position: 'relative',
            maxWidth: 'unset',
            width: '100%',
            paddingLeft: gapContainer,
            paddingRight: gapContainer,
            marginLeft: 'auto',
            marginRight: 'auto',
        };
        Object.entries(theme === null || theme === void 0 ? void 0 : theme._container).forEach(([name, width]) => {
            const postfix = name === 'default' ? '' : `-${name}`;
            const containerVarName = `--${themePrefix}container${postfix}`;
            const gapSide = `clamp(${gapContainer}, (var(--100vw, 100vw) - var(${containerVarName}) - (${gapContainer} * 2)) / 2, 100vw)`;
            containerVars[containerVarName] = width;
            containerVars[`${gapSideVar}${postfix}`] = gapSide;
            if (name !== 'default') {
                containerClass[`.container-${name}`] = Object.assign(Object.assign({}, containerProps), { maxWidth: width });
                containerClass[`.container-${name}`][gapSideVar] = `var(${gapSideVar}${postfix});`;
            }
        });
        // container fluid
        containerClass[`.container-fluid`] = Object.assign({}, containerProps);
        containerClass[`.container-fluid`][gapSideVar] = gapContainer;
        return Object.assign({ ':root': containerVars }, containerClass);
    }
};
exports.getContainerComponents = getContainerComponents;
