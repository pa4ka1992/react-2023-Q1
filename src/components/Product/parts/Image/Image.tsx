import { useState, type FC } from 'react';

import styles from './Image.module.scss';

import { IPhoto } from '~types/unsplash';

const { wrapImg, img } = styles;

export const Image: FC<{ photo?: IPhoto }> = ({ photo }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={wrapImg} style={{ backgroundColor: `${photo?.color}0d` }}>
      <img
        role="product-image"
        onLoad={() => {
          setIsLoading(false);
        }}
        className={img}
        src={photo?.urls.regular}
        alt="photo"
        style={isLoading ? { filter: 'blur(3px)' } : {}}
      />
    </div>
  );
};
