import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';

import { formateDate, getPreloadHeight } from '~helpers/_index';

import { IPhoto } from '~services/unsplash/_types';
import styles from './Card.module.scss';

const { skeleton, postDate, wrapImg, img, info, wrapLikes, like, wrapAuthor, avatar, authorName } =
  styles;

export const Card: FC<{ card: IPhoto; container: HTMLElement | null }> = ({ card, container }) => {
  const { id, likes, urls, user, created_at, color, width, height } = card;
  const [isloaded, setIsloaded] = useState(false);

  return (
    <div className={skeleton} data-testid="card" style={{ backgroundColor: color }}>
      <h4 className={postDate}>{formateDate(created_at)}</h4>
      <NavLink
        data-testid="card-link"
        to={`/photoID/${id}`}
        className={wrapImg}
        style={{ minHeight: isloaded ? 'auto' : height * getPreloadHeight(container, width) }}
      >
        <img className={img} src={urls.regular} alt="product" />
      </NavLink>

      <div className={info}>
        <div className={wrapLikes}>
          <FontAwesomeIcon className={like} icon={faThumbsUp} />
          <span>{likes}</span>
        </div>

        <div className={wrapAuthor}>
          <img
            onLoad={() => setIsloaded(true)}
            className={avatar}
            src={user.profile_image.small}
            alt="avatar"
          />
          <span className={authorName}>{user.username}</span>
        </div>
      </div>
    </div>
  );
};
