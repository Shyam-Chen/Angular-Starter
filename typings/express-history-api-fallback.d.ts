declare module 'express-history-api-fallback' {
  import { RequestHandler } from 'express';

  interface Options {
    maxAge?: number;
    root?: string;
    lastModified?: number;
    headers?: { [key: string]: string; };
    dotfiles?: boolean;
  }

  function fallback(index: string, options?: Options): RequestHandler;

  module fallback {}

  export = fallback;
}
