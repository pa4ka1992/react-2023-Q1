import axios, { type InternalAxiosRequestConfig } from 'axios';

import { ACCES_KEY, UNSPLASH } from './_constants';

export const unsplashAPI = axios.create({
  baseURL: UNSPLASH,
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers.Authorization = ACCES_KEY;

  return config;
};

unsplashAPI.interceptors.request.use(onRequest);
