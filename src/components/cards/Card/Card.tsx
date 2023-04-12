import { useState, type FC } from 'react';

import { Image, Info } from '~components/cards/Card/parts';

import styles from './Card.module.scss';

import { IPhoto } from '~types/unsplash';

const { skeleton } = styles;

interface ICardProps {
  photo: IPhoto;
  lazyLoader: (width: number) => number;
}

const Card: FC<ICardProps> = ({ photo, lazyLoader }) => {
  const { color, height, width } = photo;
  const [isloaded, setIsloaded] = useState(false);

  console.log(styles);

  return (
    <div
      className={skeleton}
      data-testid="card"
      style={{
        minHeight: isloaded ? 'auto' : height * lazyLoader(width),
        backgroundColor: color,
      }}
    >
      <Image photo={photo} setIsloaded={setIsloaded} />
      <Info photo={photo} />
    </div>
  );
};

export default Card;
