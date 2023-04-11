import { type FC } from 'react';

import { Spinner } from '@/components';

import styles from './Image.module.scss';

import { IImageProps } from '~components/Product/parts/_types';

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
