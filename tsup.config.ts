// tsup.config.ts
import {defineConfig} from 'tsup';
import pkg from './package.json';

// all tsup options :  https://www.jsdocs.io/package/tsup#Options
export default defineConfig({
  name: pkg.name,
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: true,
  outDir: 'dist',
  target: 'es2024',
  //   dts : create d.ts file, declaration for typescript
  // dts: true,
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
