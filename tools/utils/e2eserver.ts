import * as express from 'express';
import * as expressHistory from 'express-history-api-fallback';
import { resolve } from 'path';

export class E2EServer {
  server(port: number, dir: string): any {
    let app = express();
    let root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(expressHistory('index.html', { root }));

    return new Promise((resolve, reject) => {
      let server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}
