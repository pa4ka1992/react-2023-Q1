import { IPhoto } from '@/types/unsplash';

const usedProps = [
  'id',
  'likes',
  'color',
  'description',
  'alt_description',
  'urls',
  'width',
  'height',
  'user',
  'created_at',
] as (keyof IPhoto)[];

export function isPhoto(photo: unknown): photo is IPhoto {
  const predict = photo as IPhoto;

  return usedProps.every((key) => Object.prototype.hasOwnProperty.call(predict, key));
}
