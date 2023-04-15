import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type THomePageSlice = {
  search: string;
};

const initialState: THomePageSlice = {
  search: '',
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
