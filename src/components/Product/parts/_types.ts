import { IPhoto } from '@/types/unsplash';
import { Dispatch, SetStateAction } from 'react';

export interface IAuthorProps {
  photo: IPhoto;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IImageProps extends IAuthorProps {
  isLoading: boolean;
}
