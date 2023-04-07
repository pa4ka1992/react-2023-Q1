import { AxiosError } from 'axios';

import { unsplashAPI } from './_interceptor';

import { ISearchRes } from './_types';

export class Unsplash {
  private constructor() {}

  static async getPhotos(): Promise<unknown> {
    try {
      const { data } = await unsplashAPI.get<unknown>('/photos?per_page=30&page=3');

      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { status, message } = error.response.data;

        console.log(`status: ${status}; error: ${message}`);

        return message;
      }
      console.log(error);
    }
  }

  static async searchPhoto(query: string): Promise<unknown> {
    try {
      const { data } = await unsplashAPI.get<ISearchRes>(`search/photos?query=${query}`);

      return data.results;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { status, message } = error.response.data;

        console.log(`status: ${status}; error: ${message}`);

        return message;
      }
      console.log(error);
    }
  }
}
