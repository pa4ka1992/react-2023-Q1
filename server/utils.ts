import fetch, { Headers, Request, Response } from 'cross-fetch';

export const addGlobalFetch = () => {
  if (!globalThis.fetch) {
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
  }
};
