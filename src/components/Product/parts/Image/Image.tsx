import { type FC } from 'react';

import { Spinner } from '~compos/_index';

import styles from './Image.module.scss';

import { IImageProps } from '~compos/Product/parts/_types';

const { wrapImg, img } = styles;

export const Image: FC<IImageProps> = ({ photo, setIsLoading, isLoading }) => {
  return (
    <div className={wrapImg} style={{ backgroundColor: `${photo.color}0d` }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <img
          onLoad={() => {
            setIsLoading(false);
          }}
          className={img}
          src={photo.urls.regular}
          alt="photo"
        />
      )}
    </div>
  );
};
