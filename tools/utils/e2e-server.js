const { resolve } = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

class Protractor {
  server(port, dir) {
    const app = express();
    const root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(fallback('index.html', { root }));

    return new Promise(resolve => {
      const server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}

module.exports = { Protractor };
