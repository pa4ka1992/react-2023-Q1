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

    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    setPerPage(state, action: PayloadAction<number>) {
      state.per_page = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
