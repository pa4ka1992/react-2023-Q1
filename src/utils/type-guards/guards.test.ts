import { describe, expect, test } from 'vitest';

import * as mocks from '~store/reducers/constants/unsplash.mock';
import { isPhoto, isPhotoArray } from './index';

describe('type guards', () => {
  test('photo guard defines type', () => {
    expect(isPhoto(mocks.SINGLE_PHOTO_MOCK)).toBeTruthy();

    expect(isPhoto(mocks.NOT_PHOTO)).toBeFalsy();
  });

  test('photo array guard defines type', () => {
    expect(isPhotoArray(mocks.RANDOM_PHOTOS_ARRAY_MOCK)).toBeTruthy();
    expect(isPhotoArray(mocks.NOT_PHOTO_ARRAY)).toBeFalsy();
  });
});
