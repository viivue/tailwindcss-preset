# @viivue/tailwindcss-preset

[![release](https://badgen.net/github/release/viivue/tailwindcss-preset)](https://github.com/viivue/tailwindcss-preset/releases/latest)
[![bundle size](https://badgen.net/bundlephobia/minzip/@viivue/tailwindcss-preset)](https://bundlephobia.com/package/@viivue/tailwindcss-preset)
[![license](https://badgen.net/github/license/viivue/tailwindcss-preset)](https://github.com/viivue/tailwindcss-preset/blob/main/LICENSE)
[![npm](https://badgen.net/npm/v/@viivue/tailwindcss-preset)](https://www.npmjs.com/package/@viivue/tailwindcss-preset)

> Tailwind CSS preset by ViiVue that supports CSS variables, pixel-based responsive values, desktop-first breakpoints, helper components, container queries, and more.

---

## 📦 Installation

```bash
npm install @viivue/tailwindcss-preset
```

---

## 🚀 Deployment & Usage

1. **Import preset in your `tailwind.config.js` or `tailwind.config.mjs`:**

```js
import config from './theme.config.json';
import viivuePreset from '@viivue/tailwindcss-preset';

export default {
  presets: [viivuePreset(config)],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
};
```

> 📄 You must provide your own `theme.config.json`. See `example/theme.config.json` for reference.

2. **Visualize your config with Tailwind Config Viewer:**

```bash
npm run viewer
```

This command uses [tailwind-config-viewer](https://github.com/rogden/tailwind-config-viewer) to preview your custom theme visually.

3. **Build the library (for development or distribution):**

```bash
# Watch mode during development
npm run dev

# Build production output
npm run prod

```

---

## 📄 License

MIT License  
© 2025 [ViiVue](https://viivue.com)