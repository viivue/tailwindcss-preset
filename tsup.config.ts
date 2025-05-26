// tsup.config.ts
import {defineConfig} from 'tsup';
import pkg from './package.json';

// all tsup options :  https://www.jsdocs.io/package/tsup#Options
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: true,
  outDir: 'dist',
  target: 'node18',
  dts: true,
  bundle: true,
  banner: { js: `
  /**
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 */
    `.trim(), },
  treeshake: true,
  clean: true,
  noExternal: [
    '@phucbm/tailwindcss-style-props',
    '@phucbm/tailwindcss-container-queries',
    '@phucbm/tailwindcss-components',
  ]
});
