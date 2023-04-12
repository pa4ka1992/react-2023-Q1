import { useState, type FC } from 'react';

import { Spinner } from '@/components';

import styles from './Image.module.scss';

import { IPhoto } from '~types/unsplash';

const { wrapImg, img } = styles;

export const Image: FC<{ photo?: IPhoto }> = ({ photo }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={wrapImg} style={{ backgroundColor: `${photo?.color}0d` }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <img
          onLoad={() => {
            setIsLoading(false);
          }}
          className={img}
          src={photo?.urls.regular}
          alt="photo"
        />
      )}
    </div>
  );
};
