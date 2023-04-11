import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UNSPLASH } from '@/store/reducers/constants/unsplash';
import { checkResType, prepareHeaders } from './helpers';

export const unsplashAPI = createApi({
  reducerPath: 'unsplashAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: UNSPLASH,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<unknown, { per_page: number; page: number }>({
      query: ({ per_page, page }) => ({
        url: '/photos',
        params: {
          per_page: per_page,
          page: page,
        },
      }),
      transformResponse: (res) => {
        return checkResType(res);
      },
    }),

    searchPhoto: builder.query<unknown, { query: string; per_page: number }>({
      query: ({ per_page, query }) => ({
        url: '/search/photos',
        params: {
          per_page: per_page,
          query: query,
        },
      }),
      transformResponse: (res) => {
        return checkResType(res);
      },
    }),

    getSinglePhoto: builder.query<unknown, { photoId: string }>({
      query: ({ photoId }) => `/photos/${photoId}`,
      transformResponse: (res) => {
        return checkResType(res);
      },
    }),
  }),
});

export const { useGetPhotosQuery, useGetSinglePhotoQuery, useLazySearchPhotoQuery } = unsplashAPI;
