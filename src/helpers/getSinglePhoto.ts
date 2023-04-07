import { isPhoto } from '@/type-guards/photo-type-guard';
import { Unsplash } from '~services/_index';

import { IPhoto } from '~services/unsplash/_types';

type TGetPhoto = (
  photoId: string,
  setPhoto: React.Dispatch<React.SetStateAction<IPhoto | undefined>>
) => void;

export const getSinglePhoto: TGetPhoto = async (photoId, setPhoto) => {
  const photo = await Unsplash.getSinglePhoto(photoId);

  if (isPhoto(photo)) {
    setPhoto(photo);
  }
};
