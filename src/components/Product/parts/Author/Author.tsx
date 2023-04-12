import { type FC } from 'react';

import styles from './Author.module.scss';

import { IAuthorProps } from '~compos/Product/parts/_types';

const { author, avatar, authorNick } = styles;

export const Author: FC<IAuthorProps> = ({ photo, setIsLoading }) => {
  return (
    <section className={author}>
      <img
        onLoad={() => setIsLoading(false)}
        className={avatar}
        src={photo.user.profile_image.small}
        alt="avatar"
      />

      <div>
        <p>{`${photo.user.first_name}  ${photo.user.last_name}`}</p>
        <p className={authorNick}>{photo.user.username}</p>
      </div>
    </section>
  );
};
