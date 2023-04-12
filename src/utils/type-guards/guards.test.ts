import { describe, expect, test } from 'vitest';

import { isPhoto, isPhotoArray, isString } from './_index';

describe('type guards', () => {
  test('string guard defines type', () => {
    expect(isString('asd')).toBeTruthy();
    expect(isString(1)).toBeFalsy();
  });

  test('photo guard defines type', () => {
    const photo = {
      id: 'asdasd',
      likes: 'asdasd',
      color: 'asdasd',
      description: 'asdasd',
      alt_description: 'asdasd',
      urls: 'asdasd',
      width: 'asdasd',
      height: 'asdasd',
      user: 'asdasd',
      created_at: 'asdasd',
    };

    const notPhoto = {
      id: 'asda',
      likes: 'sdsd',
    };

    expect(isPhoto(photo)).toBeTruthy();

    expect(isPhoto(notPhoto)).toBeFalsy();
  });

  test('photo array guard defines type', () => {
    const photoArray = [
      {
        id: 'asdasd',
        likes: 'asdasd',
        color: 'asdasd',
        description: 'asdasd',
        alt_description: 'asdasd',
        urls: 'asdasd',
        width: 'asdasd',
        height: 'asdasd',
        user: 'asdasd',
        created_at: 'asdasd',
      },
      {
        id: 'asdasd',
        likes: 'asdasd',
        color: 'asdasd',
        description: 'asdasd',
        alt_description: 'asdasd',
        urls: 'asdasd',
        width: 'asdasd',
        height: 'asdasd',
        user: 'asdasd',
        created_at: 'asdasd',
      },
    ];

    const notPhotoArray = [
      {
        id: 'asda',
        likes: 'sdsd',
      },
      {
        id: 'asda',
        likes: 'sdsd',
      },
    ];

    expect(isPhotoArray(photoArray)).toBeTruthy();
    expect(isPhotoArray(notPhotoArray)).toBeFalsy();
  });
});
