import { type FC } from 'react';

import { IPhoto } from '@/types/unsplash';
import { Image, Info } from '~components/cards/Card/parts';
import styles from './Card.module.scss';

const { skeleton } = styles;

const Card: FC<{ photo: IPhoto; container: HTMLElement | null }> = ({ photo, container }) => {
  const { color } = photo;

  return (
    <div className={skeleton} data-testid="card" style={{ backgroundColor: color }}>
      <Image photo={photo} container={container} />
      <Info photo={photo} />
    </div>
  );
};

export default Card;
