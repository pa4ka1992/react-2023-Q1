import { type FC } from 'react';

import styles from './Author.module.scss';

import { IPhoto } from '~types/unsplash';

const { author, avatar, authorNick } = styles;

export const Author: FC<{ photo: IPhoto }> = ({ photo }) => {
  return (
    <section className={author}>
      <img className={avatar} src={photo.user.profile_image.small} alt="avatar" />

      <div>
        <p>{`${photo.user.first_name}  ${photo.user.last_name}`}</p>
        <p className={authorNick}>{photo.user.username}</p>
      </div>
    </section>
  );
};
