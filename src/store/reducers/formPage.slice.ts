import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '~pages/Form/_types';

type TFormPageSlice = {
  users: IUser[];
};

const initialState: TFormPageSlice = {
  users: [],
};

export const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload);
    },
  },
});

export const formPageActions = formPageSlice.actions;

export const formPageReducer = formPageSlice.reducer;
