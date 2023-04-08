import { IPhoto } from '~services/unsplash/_types';

const usedProps = [
  'id',
  'likes',
  'description',
  'alt_description',
  'urls',
  'user',
] as (keyof IPhoto)[];

export function isPhoto(photo: unknown): photo is IPhoto {
  const predict = photo as IPhoto;

  return usedProps.every((key) => {
    if (Object.prototype.hasOwnProperty.call(predict, key)) {
      return true;
    } else {
      throw new Error(`${key} property is undefined`);
    }
  });
}
