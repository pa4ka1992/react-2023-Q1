import { IPhoto } from '~services/unsplash/_types';

const keys = ['id', 'likes', 'description', 'urls'] as (keyof IPhoto)[];

export function isPhoto(photo: unknown): photo is IPhoto {
  const predict = photo as IPhoto;

  return keys.every((key) => {
    if (Object.prototype.hasOwnProperty.call(predict, key)) {
      return true;
    } else {
      throw new Error(`${key} property is undefined`);
    }
  });
}
