import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';

import styles from '../../Card.module.scss';

import { IPhoto } from '~types/unsplash';

const { info, wrapLikes, wrapAuthor, avatar, icon } = styles;

export const Info: FC<{ photo: IPhoto }> = ({ photo }) => {
  const { likes, user } = photo;

  return (
    <div className={info}>
      <div className={wrapLikes}>
        <FontAwesomeIcon className={icon} icon={faThumbsUp} />
        <span>{likes}</span>
      </div>

      <div className={wrapAuthor}>
        <img className={avatar} src={user.profile_image.small} alt="avatar" />
        <span>{user.username}</span>
      </div>
    </div>
  );
};
