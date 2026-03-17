import { defineConfig } from 'tsup';
import { execSync } from 'child_process';

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
  onSuccess() {
    // Copiar views para dist (para ter disponível em produção)
    try {
      execSync('cp -r src/views dist/views', { stdio: 'inherit' });
      console.log('✓ Views copiadas para dist/');
    } catch {
      console.log('⚠ Views já existem ou erro ao copiar');
    }
  },
});
