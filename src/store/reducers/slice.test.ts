import { formPageActions, formPageSlice, homePageActions, homePageSlice } from '~store/reducers/';

describe('homePageSlice', () => {
  test('should set search correctly', () => {
    const search = 'test';
    const action = { type: homePageActions.setSearch.type, payload: search };
    const state = homePageSlice.reducer(undefined, action);

    expect(state.search).toBe(search);
  });
});

describe('formPageSlice', () => {
  test('should set user correctly', () => {
    const user = {
      id: '12',
      userName: 'vasia',
      experience: '2017-03-02',
      country: 'gvadelupa',
      addInfo: ['gachi', 'muchi'],
      hire: 'yes',
      photo: 'photo',
    };

    const action = { type: formPageActions.setUser.type, payload: user };
    const state = formPageSlice.reducer(undefined, action);

    expect(state.users[0].id).toEqual('12');
  });
});
