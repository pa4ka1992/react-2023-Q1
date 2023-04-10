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

export const { setUser } = formPageSlice.actions;

export default formPageSlice.reducer;
