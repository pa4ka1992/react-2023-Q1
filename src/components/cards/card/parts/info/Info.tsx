import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';

import { IPhoto } from '@/types/unsplash';
import styles from './Info.module.scss';

const { info, wrapLikes, wrapAuthor, avatar } = styles;

export const Info: FC<{ photo: IPhoto }> = ({ photo }) => {
  const { likes, user } = photo;

  return (
    <div className={info}>
      <div className={wrapLikes}>
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>{likes}</span>
      </div>

      <div className={wrapAuthor}>
        <img className={avatar} src={user.profile_image.small} alt="avatar" />
        <span>{user.username}</span>
      </div>
    </div>
  );
};
