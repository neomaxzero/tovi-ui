module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    ['transform-define', require('./config.js')],
    ['babel-plugin-root-import'],
  ],
};
