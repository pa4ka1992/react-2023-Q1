import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageService } from '~services/index';
import { unsplashAPI } from '~store/reducers';

import { TPhotos } from '~types/unsplash';

type THomePageSlice = {
  search: string;
  cardsState: TPhotos;
  isFetching: boolean;
};

const LS = new LocalStorageService('unsplash');

const initialState: THomePageSlice = {
  search: LS.getItem('searchValue') ?? '',
  cardsState: [],
  isFetching: false,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
      LS.setItem('searchValue', action.payload);
    },

    setCardsState(state, action: PayloadAction<TPhotos>) {
      state.cardsState = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(unsplashAPI.endpoints.getPhotos.matchFulfilled, (state, { payload }) => {
      if (payload) {
        state.cardsState = payload;
      }
    });

    builder.addMatcher(unsplashAPI.endpoints.searchPhoto.matchFulfilled, (state, { payload }) => {
      if (payload) {
        state.cardsState = payload;
        state.search = '';
        LS.setItem('searchValue', '');
      }
    });
  },
});

export const homePageActions = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
