import { unsplashAPI } from './_interceptor';
import { axiosCatcher } from './axiosCatcher';

import { ISearchRes } from './_types';

export class Unsplash {
  private constructor() {}

  static async getPhotos(): Promise<unknown> {
    return axiosCatcher(async () => {
      const { data } = await unsplashAPI.get<unknown>('/photos?per_page=30&page=3');
      return data;
    });
  }

  static async searchPhoto(query: string): Promise<unknown> {
    return axiosCatcher(async () => {
      const { data } = await unsplashAPI.get<ISearchRes>(
        `/search/photos?query=${query}&per_page=30`
      );

      return data.results;
    });
  }

  static async getSinglePhoto(photoId: string): Promise<unknown> {
    return axiosCatcher(async () => {
      const { data } = await unsplashAPI.get<ISearchRes>(`/photos/${photoId}`);

      return data;
    });
  }
}
