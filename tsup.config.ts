import { defineConfig } from 'tsup';

export default defineConfig([
  {
    // entry: ['lib/**/*.{ts,tsx}', '!lib/**/*.d.{ts,tsx}'],
    entry: ['lib/index.ts'],
    format: ['cjs', 'esm'],
    clean: true,
    treeshake: true,
    splitting: false,
    dts: true,
    external: ['react'],
    tsconfig: './tsconfig.build.json',
    // esbuildOptions(options, context) {
    //   // the directory structure will be the same as the source
    //   options.outbase = './';
    // },
  },
]);
