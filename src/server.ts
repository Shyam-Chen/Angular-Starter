import * as functions from 'firebase-functions';
import * as express from 'express';
import * as request from 'request';

const sh = express();

sh.get('*', (req, res) => {
  const botUserAgents = [
    'W3C_Validator',
    'baiduspider',
    'bingbot',
    'embedly',
    'facebookexternalhit',
    'linkedinbot',
    'outbrain',
    'pinterest',
    'quora link preview',
    'rogerbot',
    'showyoubot',
    'slackbot',
    'twitterbot',
    'vkShare',
  ];

  const rendertronUrl = process.env.RENDERTRON_URL;
  const targetUrl = process.env.SITE_URL + req.originalUrl;

  if (new RegExp(botUserAgents.join('|'), 'i').test(req.headers['user-agent'])) {
    request(`${rendertronUrl}/render/${targetUrl}`, (error, response, body) => {
      res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
      res.set('Vary', 'User-Agent');

      res.send(`${body}`);
    });
  } else {
    request(process.env.SITE_URL, (error, response, body) => {
      res.send(`${body}`);
    });
  }
});

export const app = functions.https.onRequest(sh);
