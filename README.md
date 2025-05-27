# @viivue/tailwindcss-preset


[![release](https://badgen.net/github/release/viivue/easy-tab-accordion/)](https://github.com/viivue/tailwindcss-preset/releases/latest)
[![license](https://badgen.net/github/license/viivue/easy-tab-accordion/)](https://github.com/viivue/tailwindcss-preset/blob/master/LICENSE)

> Tailwind CSS preset by ViiVue that supports CSS variables, pixel-based responsive values, desktop-first breakpoints, helper components, container queries, and more.

---

## 📦 Installation

```bash
npm i @viivue/tailwindcss-preset -D
```

## 🚀 Usage

```js
import customPreset from '@viivue/tailwindcss-preset';

export default {
    presets: [customPreset()],
    content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
};
```

### 1. **If you use a `theme.config.json` file:**

```js
import config from './theme.config.json';
import customPreset from '@viivue/tailwindcss-preset';

export default {
  presets: [customPreset(config)],
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


### 3. **Build the library (for development or distribution):**

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