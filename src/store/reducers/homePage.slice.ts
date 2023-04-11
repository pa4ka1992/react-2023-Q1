import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TPhotos } from '~types/unsplash';

type THomePageSlice = {
  search: string;
  cardsState: TPhotos;
  isFetching: boolean;
};

const initialState: THomePageSlice = {
  search: '',
  cardsState: [],
  isFetching: false,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setCardsState(state, action: PayloadAction<TPhotos>) {
      state.cardsState = action.payload;
    },

    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
