/** @type {import('tailwindcss').Config} */
import config from "./theme.config.json" with { type: "json" };

import { viivuePreset } from '../dist/index.js';
// import { viivuePreset } from '@viivue/tailwindcss-preset';
export default {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
        }
    },

  presets: [viivuePreset(config)],
};
