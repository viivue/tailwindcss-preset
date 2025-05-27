# @viivue/tailwindcss-preset


[![release](https://badgen.net/github/release/viivue/easy-tab-accordion/)](https://github.com/viivue/easy-tab-accordion/releases/latest)
[![minified](https://badgen.net/badge/minified/10KB/cyan)](https://www.jsdelivr.com/package/gh/viivue/easy-tab-accordion)
[![jsdelivr](https://data.jsdelivr.com/v1/package/gh/viivue/easy-tab-accordion/badge?style=rounded)](https://www.jsdelivr.com/package/gh/viivue/easy-tab-accordion)
[![license](https://badgen.net/github/license/viivue/easy-tab-accordion/)](https://github.com/viivue/easy-tab-accordion/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/baaede11-84dc-46b3-b434-11aad923a156/deploy-status)](https://app.netlify.com/sites/easy-tab-accordion/deploys)
> Tailwind CSS preset by ViiVue that supports CSS variables, pixel-based responsive values, desktop-first breakpoints, helper components, container queries, and more.

---

## 📦 Installation

```bash
npm install @viivue/tailwindcss-preset -D
```

---

## 🚀 Usage

### 1. **Import preset in your `tailwind.config.js` or `tailwind.config.mjs`**

#### ✅ If you use a `theme.config.json` file:

```js
// tailwind.config.js or .mjs
import config from './theme.config.json';
import customPreset from '@viivue/tailwindcss-preset';

export default {
  presets: [customPreset(config)],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
};
```

#### ✅ If you **don’t use** a config JSON file:

```js
// tailwind.config.js or .mjs
import customPreset from '@viivue/tailwindcss-preset';

export default {
    presets: [customPreset()],
    content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
};
```

### 2. **Options: Visualize your config with Tailwind Config Viewer**

#### 📦 Install the package:

> This will start a local server to preview your Tailwind config visually.
> Useful for inspecting themes, colors, spacing, breakpoints, etc.

📖 Learn more: [tailwind-config-viewer](https://github.com/rogden/tailwind-config-viewer)

```bash
npm i tailwind-config-viewer -D
```

#### 🔍 Open the viewer:

```bash
npm run viewer
```


3. **Build the library (for development or distribution):**

```bash
# Watch mode during development
npm run dev

# Build production output
npm run prod

# Open config viewer
npm run viewer

```

---

## 📄 License

MIT License  
© 2025 [ViiVue](https://github.com/viivue/tailwindcss-custom)