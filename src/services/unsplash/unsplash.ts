import { axiosCatcher } from './axiosCatcher';
import { unsplashAPI } from './_interceptor';

import { ISearchRes } from './_types';

export class Unsplash {
  private constructor() {}

  static async getPhotos(): Promise<unknown> {
    return axiosCatcher(async () => {
      const { data } = await unsplashAPI.get<unknown>('/photos?per_page=28&page=3');
      console.log(data);

      return data;
    });
  }

  static async searchPhoto(query: string): Promise<unknown> {
    return axiosCatcher(async () => {
      const { data } = await unsplashAPI.get<ISearchRes>(
        `/search/photos?query=${query}&per_page=28`
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
