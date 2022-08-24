import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const lib = {
  input: 'lib/index.ts',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      clean: true,
      tsconfig: 'tsconfig-rollup.json',
    }),
  ],
};

export default lib;
