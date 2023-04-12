import { Dispatch, SetStateAction } from 'react';
import { IPhoto } from '~services/unsplash/_types';

export interface IAuthorProps {
  photo: IPhoto;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IImageProps extends IAuthorProps {
  isLoading: boolean;
}
