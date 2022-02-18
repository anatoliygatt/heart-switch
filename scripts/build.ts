import { build } from 'esbuild';
import type { BuildOptions } from 'esbuild';
import * as pkg from '../package.json';

const commonBuildOptions: BuildOptions = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: [...Object.keys(pkg.peerDependencies)],
  minify: true,
  sourcemap: true,
};

Promise.all([
  build({
    ...commonBuildOptions,
    format: 'cjs',
    outdir: 'dist/cjs',
  }),
  build({
    ...commonBuildOptions,
    format: 'esm',
    outdir: 'dist/esm',
    splitting: true,
  }),
]).catch(() => process.exit(1));
