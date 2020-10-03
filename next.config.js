const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  },
  devIndicators: {
    autoPrerender: false
  },
  ...withCSS(withSass())
};
