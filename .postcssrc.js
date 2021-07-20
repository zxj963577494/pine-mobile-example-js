module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-preset-env': {},
    autoprefixer: {},
    'postcss-plugin-px2rem': {
      rootValue: 150,
      selectorBlackList: [/^html$/, /^body$/],
      exclude: /(node_module)/,
      mediaQuery: false,
      minPixelValue: 2,
    },
  },
};
