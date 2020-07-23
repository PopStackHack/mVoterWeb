// Note: This will heavily rely on ExpressJS for i18n support.
// In case if any bugs should occur, see https://nextjs.org/docs/advanced-features/custom-server

const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./hoc/i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`App served on localhost:${port}`);
})();
