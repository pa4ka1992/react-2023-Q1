import { expect } from 'vitest';

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
      id: 12,
      userName: 'vasia',
      experience: '2017-03-02',
      country: 'gvadelupa',
      addInfo: ['gachi', 'muchi'],
      hire: 'yes',
      photo: 'photo',
    };

    const action = { type: formPageActions.setUser.type, payload: user };
    const state = formPageSlice.reducer(undefined, action);

    expect(state.users[0].id).toEqual(12);
  });
});

// describe('unsplash api', () => {
//   // server.use(
//   //   rest.get(`${UNSPLASH}/photos/:photoId`, (req, res, ctx) => {
//   //     return res(ctx.status(RES_STATUS.ok), ctx.json(mocks.NOT_PHOTO_ARRAY));
//   //   }),

//   //   rest.get(`${UNSPLASH}/search/photos`, (req, res, ctx) => {
//   //     return res(ctx.status(RES_STATUS.ok), ctx.json({ results: mocks.NOT_PHOTO_ARRAY }));
//   //   }),

//   //   rest.get(`${UNSPLASH}/photos`, (req, res, ctx) => {
//   //     return res(ctx.status(RES_STATUS.ok), ctx.json(mocks.NOT_PHOTO));
//   //   })
//   // );

//   test('responses correctly', async () => {
//     const random = unsplashAPI.endpoints.getPhotos.initiate({ per_page: 30, page: 3 });
//     const search = await unsplashAPI.endpoints.searchPhoto.initiate({ query: 'asd', per_page: 30 });
//     const single = await unsplashAPI.endpoints.getSinglePhoto.initiate('photo-1');

//     expect(random.data).toBeUndefined();
//     expect(search.data).toBeUndefined();
//     expect(single.data).toBeUndefined();
//   });
// });
