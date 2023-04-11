import { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { formateDate, getPreloadHeight } from '@/helpers';

import { IPhoto } from '@/types/unsplash';
import styles from './Image.module.scss';

const { postDate, wrapImg, img } = styles;

export const Image: FC<{ photo: IPhoto; container: HTMLElement | null }> = ({
  photo,
  container,
}) => {
  const { id, urls, created_at, width, height } = photo;
  const [isloaded, setIsloaded] = useState(false);

  return (
    <>
      <h4 className={postDate}>{formateDate(created_at)}</h4>
      <NavLink
        data-testid="card-link"
        to={`/photoID/${id}`}
        className={wrapImg}
        style={{
          minHeight: isloaded ? 'auto' : height * getPreloadHeight(container, width),
        }}
      >
        <img onLoad={() => setIsloaded(true)} className={img} src={urls.regular} alt="product" />
      </NavLink>
    </>
  );
};
