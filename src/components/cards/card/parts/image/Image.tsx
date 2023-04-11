import { type Dispatch, type FC, type SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Image.module.scss';

import { formateDate } from '@/helpers';

import { IPhoto } from '~types/unsplash';

interface IImageProps {
  photo: IPhoto;
  setIsloaded: Dispatch<SetStateAction<boolean>>;
}

const { postDate, wrapImg, img } = styles;

export const Image: FC<IImageProps> = ({ photo, setIsloaded }) => {
  const { id, urls, created_at } = photo;

  return (
    <>
      <h4 className={postDate}>{formateDate(created_at)}</h4>
      <NavLink data-testid="card-link" to={`/photoID/${id}`} className={wrapImg}>
        <img onLoad={() => setIsloaded(true)} className={img} src={urls.regular} alt="product" />
      </NavLink>
    </>
  );
};
