import { join } from 'path';
import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as history from 'express-history-api-fallback';

const app = express();
const root = join(__dirname, '../build');

app.set('port', (process.env.PORT || 3000));

app.use(compression());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(root));
app.use(history('index.html', { root }));

app.listen(app.get('port'), (): void => {
  console.log('App: Bootstrap Succeeded.');
  console.log(`Port: ${app.get('port')}.`);
});
