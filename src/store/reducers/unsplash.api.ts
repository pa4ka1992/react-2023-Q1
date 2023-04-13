import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { isPhoto, isPhotoArray } from '~utils/type-guards';
import { prepareHeaders } from './helpers';

import { UNSPLASH } from '@/store/reducers/constants/unsplash';

import { IPhoto, ISearchRes, TPhotos } from '~types/unsplash';

export const unsplashAPI = createApi({
  reducerPath: 'unsplashAPI',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({
    baseUrl: UNSPLASH,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<TPhotos | undefined, { per_page: number; page: number }>({
      query: ({ per_page, page }) => ({
        url: '/photos',
        params: {
          per_page: per_page,
          page: page,
        },
      }),
      transformResponse: (res: unknown) => (isPhotoArray(res) ? res : undefined),
    }),

    searchPhoto: builder.query<TPhotos | undefined, { query: string; per_page: number }>({
      query: ({ per_page, query }) => ({
        url: '/search/photos',
        params: {
          per_page: per_page,
          query: query,
        },
      }),
      transformResponse: (res: ISearchRes) => {
        return isPhotoArray(res.results) ? res.results : undefined;
      },
    }),

    getSinglePhoto: builder.query<IPhoto | undefined, string | undefined>({
      query: (photoId) => `/photos/${photoId}`,
      transformResponse: (res: unknown) => (isPhoto(res) ? res : undefined),
    }),
  }),
});

export const { useLazyGetPhotosQuery, useGetSinglePhotoQuery, useLazySearchPhotoQuery } =
  unsplashAPI;
