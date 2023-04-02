import { FC } from 'react';

import styles from './User.module.scss';

import { FieldValues } from '@/pages/form/_types';

const { img, title, avatar, wrapper, content, userWrapper, info, infoItem } = styles;

export const User: FC<{ user: FieldValues }> = ({ user }) => {
  return (
    <div className={userWrapper}>
      <div className={avatar}>
        <img className={img} src={URL.createObjectURL(user.photo[0])} alt="avatar" />
      </div>

      <div className={wrapper}>
        <span className={title}>Name:</span>
        <span className={content}>{user.userName}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Birth date:</span>
        <span className={content}>{user.birthDate.replace(/[-]/g, '.')}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Country:</span>
        <span>{user.country}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Gender:</span>
        <span>{user.gender}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Preferences:</span>
        <ul className={info}>
          {user.addInfo.map((info, i) =>
            info ? (
              <li className={infoItem} key={i}>
                {info}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
