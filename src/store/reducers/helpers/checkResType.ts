import { isPhoto, isPhotoArray } from '~utils/type-guards';

export const checkResType = (res: unknown) => {
  const throwError = () => {
    throw new Error('missing photo type');
  };

  if (Array.isArray(res)) {
    return isPhotoArray(res) ? res : throwError();
  }

  return isPhoto(res) ? res : throwError();
};
