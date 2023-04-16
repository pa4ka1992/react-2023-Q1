import { describe, expect, test } from 'vitest';

import * as mocks from '~store/reducers/constants/mockUnsplash';
import { isPhoto, isPhotoArray, isString } from './index';

describe('type guards', () => {
  test('string guard defines type', () => {
    expect(isString('asd')).toBeTruthy();
    expect(isString(1)).toBeFalsy();
  });

  test('photo guard defines type', () => {
    expect(isPhoto(mocks.SINGLE_PHOTO_MOCK)).toBeTruthy();

    expect(isPhoto(mocks.NOT_PHOTO)).toBeFalsy();
  });

  test('photo array guard defines type', () => {
    expect(isPhotoArray(mocks.RANDOM_PHOTOS_ARRAY_MOCK)).toBeTruthy();
    expect(isPhotoArray(mocks.NOT_PHOTO_ARRAY)).toBeFalsy();
  });
});
