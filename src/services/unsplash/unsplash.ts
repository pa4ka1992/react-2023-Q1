import { AxiosError } from 'axios';

import { unsplashAPI } from './_interceptor';

import { RES_STATUS } from './_constants';

export class Unsplash {
  private constructor() {}

  static async getPhotos() {
    try {
      const { status, data } = await unsplashAPI.get<unknown>('/photos');

      if (status === RES_STATUS.ok && data) {
        return data;
      }
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
