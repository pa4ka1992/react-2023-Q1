import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type THomePageSlice = {
  search: string;
  page: number;
  per_page: number;
};

const initialState: THomePageSlice = {
  search: '',
  page: NaN,
  per_page: NaN,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
