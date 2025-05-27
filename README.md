# @viivue/tailwindcss-preset

[![release](https://badgen.net/github/release/viivue/easy-tab-accordion/)](https://github.com/viivue/easy-tab-accordion/releases/latest)
[![minified](https://badgen.net/badge/minified/10KB/cyan)](https://www.jsdelivr.com/package/gh/viivue/easy-tab-accordion)
[![jsdelivr](https://data.jsdelivr.com/v1/package/gh/viivue/easy-tab-accordion/badge?style=rounded)](https://www.jsdelivr.com/package/gh/viivue/easy-tab-accordion)
[![license](https://badgen.net/github/license/viivue/easy-tab-accordion/)](https://github.com/viivue/easy-tab-accordion/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/baaede11-84dc-46b3-b434-11aad923a156/deploy-status)](https://app.netlify.com/sites/easy-tab-accordion/deploys)
> Tailwind CSS preset by ViiVue that supports CSS variables, pixel-based responsive values, desktop-first breakpoints, helper components, container queries, and more.


## Installation
1. Install `@viivue/tailwindcss-preset` via npm
```bash
npm i @viivue/tailwindcss-preset -D
```

2. Add preset to your `tailwind.config.js`
```js
import viivuePreset from '@viivue/tailwindcss-preset';

 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],

   // add preset
   presets: [viivuePreset()],
 }
```

## Usage

### Visualize your config with Tailwind Config Viewer
> This will start a local server to preview your Tailwind config visually.
> Useful for inspecting themes, colors, spacing, breakpoints, etc.

```bash
npm i tailwind-config-viewer -D
```

Open a local server to view the tailwind configs
```bash
tailwind-config-viewer -o
```

📖 See [tailwind-config-viewer](https://github.com/rogden/tailwind-config-viewer)

[View the config of this preset](#)


### Use JSON config

This preset supports to load the tailwind config from a JSON file.

```js
import config from './tailwind.config.json';
import viivuePreset from '@viivue/tailwindcss-preset';

export default {
  // .. other tailwind configs

  // add preset with config from JSON
  presets: [viivuePreset(config)],
};
```



<details>
<summary>Example of `tailwind.config.json`</summary>

```json
{
  "prefix": "vii-",
  "colors": {
    "black": "#000",
    "white": "#fff",
    "purple": "#9650A5",
    "green": "#96C382",
    "indigo": "#605C80",
    "blue": "#49ABE3",
    "yellow": "#FEE882"
  },
  "fontFamily": {
    "primary": [
      "Lexend",
      "sans-serif"
    ],
    "heading": [
      "Comfortaa",
      "sans-serif"
    ],
    "icomoon": [
      "icomoon",
      "fantasy"
    ]
  },
  "fontWeight": {
    "primary": [
      400,
      500,
      600,
      700
    ],
    "heading": [
      700
    ]
  },
  "fontSize": {
    "14": "14px",
    "16": "16px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "h1": "var(--vii-size-48)",
    "h2": "var(--vii-size-40)",
    "h3": "var(--vii-size-32)",
    "body": "var(--vii-size-16)"
  },
  "fontSizeResponsive": {
    "md": {
      "32": "24px",
      "40": "28px",
      "48": "32px"
    }
  },
  "spacing": {
    "default": "var(--vii-spacing-80)",
    "heading": "var(--vii-spacing-20)",
    "paragraph": "var(--vii-spacing-20)",
    "gap-container": "40px",
    "gap-vc-column": "12px"
  },
  "spacingResponsive": {
    "md": {
      "gap-container": "20px",
      "gap-vc-column": "10px"
    },
    "sm": {},
    "xs": {}
  },
  "container": {
    "default": "1392px",
    "small": "700px"
  },
  "screens": {
    "xl": {
      "min": "1561px"
    },
    "lg": {
      "max": "1560px"
    },
    "xs": {
      "max": "480px"
    }
  },
  "variants": {
    "search-open": "html.search-open &",
    "menu-open": "html.menu-open &",
    "scroll-middle": "body.scroll-middle &",
    "scroll-up": "body.scroll-up &"
  }
}
```
  
</details>

## Development

```bash
# Watch mode during development
npm run dev

# Build production output
npm run prod

# Open config viewer
npm run viewer

```

## License

MIT License © 2025 ViiVue
