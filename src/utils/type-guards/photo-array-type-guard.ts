import { TPhotos } from '~services/unsplash/_types';
import { isPhoto } from './photo-type-guard';

export function isPhotoArray(photos: unknown): photos is TPhotos {
  const predict = photos as TPhotos;

  return Array.isArray(photos) && predict.every((photo) => isPhoto(photo));
}
