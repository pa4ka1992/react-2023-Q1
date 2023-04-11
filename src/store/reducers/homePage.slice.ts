import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageService } from '~services/index';
import { unsplashAPI } from '~store/reducers';

import { TPhotos } from '~types/unsplash';

type THomePageSlice = {
  search: string;
  cards: TPhotos;
  isFetching: boolean;
};

const LS = new LocalStorageService('unsplash');

const initialState: THomePageSlice = {
  search: LS.getItem('searchValue') ?? '',
  cards: [],
  isFetching: false,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      LS.setItem('searchValue', action.payload);
    },

    setcards(state, action: PayloadAction<TPhotos>) {
      state.cards = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(unsplashAPI.endpoints.getPhotos.matchFulfilled, (state, { payload }) => {
      if (payload) {
        state.cards = payload;
      }
    });

    builder.addMatcher(unsplashAPI.endpoints.searchPhoto.matchFulfilled, (state, { payload }) => {
      if (payload) {
        state.cards = payload;
      }
    });
  },
});

export const homePageActions = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
