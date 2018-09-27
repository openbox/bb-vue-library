module.exports = {
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.runtime.common.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
