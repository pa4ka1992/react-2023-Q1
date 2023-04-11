import { ACCES_KEY, UNSPLASH } from '@/services/unsplash/_constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = (headers: Headers) => {
  headers.set('authorization', `Client-ID ${ACCES_KEY}`);

  return headers;
};

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
      transformErrorResponse: () => {},
    }),

    searchPhoto: builder.query<unknown, { query: string; per_page: number }>({
      query: ({ per_page, query }) => ({
        url: '/search/photos',
        params: {
          per_page: per_page,
          query: query,
        },
      }),
      transformErrorResponse: () => {},
    }),

    getSinglePhoto: builder.query<unknown, { photoId: string }>({
      query: ({ photoId }) => `/photos/${photoId}`,
      transformErrorResponse: () => {},
    }),
  }),
});

export const { useGetPhotosQuery, useGetSinglePhotoQuery, useLazySearchPhotoQuery } = unsplashAPI;
