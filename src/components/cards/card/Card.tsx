import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPhoto } from '@/services/unsplash/_types';
import styles from './Card.module.scss';

const { titleName, skeleton, wrapImg, img, dollar, star, wrapRate, wrapPrice, wrapStar } = styles;

export const Card: FC<{ card: IPhoto }> = ({ card }) => {
  const { id, description, alt_description, likes, urls, user } = card;

  return (
    <section className={skeleton} data-testid="card">
      <NavLink to={`/:${id}`} className={wrapImg}>
        <img className={img} src={urls.thumb} alt="product" />
      </NavLink>

      <NavLink to={`/:${id}`}>
        <h3 className={titleName}>{description ?? alt_description}</h3>
      </NavLink>

      <div className={wrapRate}>
        <div className={wrapStar}>
          <FontAwesomeIcon className={star} icon={faThumbsUp} />
          <span>{likes}</span>
        </div>
      </div>

      <div className={wrapPrice}>
        <FontAwesomeIcon className={dollar} icon={faUser} />
        <span>{user.username}</span>
      </div>
    </section>
  );
};
