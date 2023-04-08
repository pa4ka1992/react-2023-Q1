import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { formateDate } from '~helpers/formatDate';

import { IPhoto } from '@/services/unsplash/_types';
import styles from './Card.module.scss';

const { skeleton, postDate, wrapImg, img, info, wrapLikes, like, wrapAuthor, avatar, authorName } =
  styles;

export const Card: FC<{ card: IPhoto }> = ({ card }) => {
  const { id, likes, urls, user, created_at } = card;

  return (
    <section className={skeleton} data-testid="card">
      <h4 className={postDate}>{formateDate(created_at)}</h4>
      <NavLink to={`${id}`} className={wrapImg}>
        <img className={img} src={urls.regular} alt="product" />
      </NavLink>

      <div className={info}>
        <div className={wrapLikes}>
          <FontAwesomeIcon className={like} icon={faThumbsUp} />
          <span>{likes}</span>
        </div>

        <div className={wrapAuthor}>
          <img className={avatar} src={user.profile_image.small} alt="avatar" />
          <span className={authorName}>{user.username}</span>
        </div>
      </div>
    </section>
  );
};
