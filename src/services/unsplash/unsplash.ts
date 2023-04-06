import { AxiosError } from 'axios';

import { unsplashAPI } from './_interceptor';

import { TPhotos } from './_types';

export class Unsplash {
  private constructor() {}

  static async getPhotos(): Promise<TPhotos | undefined> {
    try {
      const { data } = await unsplashAPI.get<TPhotos>('/photos');

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
}
