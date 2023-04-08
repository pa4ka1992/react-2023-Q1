import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPhoto } from '@/services/unsplash/_types';
import styles from './Card.module.scss';

const { skeleton, wrapImg, img, star, wrapRate, wrapPrice, wrapStar } = styles;

export const Card: FC<{ card: IPhoto }> = ({ card }) => {
  const { id, likes, urls, user } = card;
  console.log(user.profile_image.small);

  return (
    <section className={skeleton} data-testid="card">
      <NavLink to={`${id}`} className={wrapImg}>
        <img className={img} src={urls.regular} alt="product" />
      </NavLink>

      <div className={wrapRate}>
        <div className={wrapStar}>
          <FontAwesomeIcon className={star} icon={faThumbsUp} />
          <span>{likes}</span>

          <div className={wrapPrice}>
            <img src={user.profile_image.small} alt="avatar" />
            <span>{user.username}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
