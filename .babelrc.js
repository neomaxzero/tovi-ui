module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', require('./config.js')],
    ['babel-plugin-root-import'],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};
