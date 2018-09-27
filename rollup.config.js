import BabelPlugin from 'rollup-plugin-babel';
import ReplacePlugin from 'rollup-plugin-replace';
import VuePlugin from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/bb-vue-library.common.js',
    format: 'cjs',
  }, {
    file: 'dist/bb-vue-library.esm.js',
    format: 'esm',
  }, {
    file: 'dist/bb-vue-library.js',
    format: 'umd',
    name: 'bbVueLibrary',
  }],
  plugins: [
    ReplacePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    BabelPlugin(),
    VuePlugin(),
  ],
};
