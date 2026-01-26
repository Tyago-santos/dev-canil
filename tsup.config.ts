import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  dts: false,
  target: 'node18',
  outDir: 'dist',
  bundle: false,
  skipNodeModulesBundle: true,
});
