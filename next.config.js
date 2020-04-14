const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  ...withCSS(withSass()),
};
