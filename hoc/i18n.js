const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  browserLanguageDetection: false,
  serverLanguageDetection: false, // TODO: Fix this up to allow user persistence while changing languages
  defaultLanguage: 'mm',
  otherLanguages: ['en'],
});
