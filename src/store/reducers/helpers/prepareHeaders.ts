import { ACCES_KEY } from '../constants/unsplash';

export const prepareHeaders = (headers: Headers) => {
  headers.set('authorization', `Client-ID ${ACCES_KEY}`);

  return headers;
};
