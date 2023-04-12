import { FC } from 'react';

import styles from './User.module.scss';

import { IUser } from '~types/user';

const { img, title, avatar, wrapper, content, userWrapper, infoItem } = styles;

const User: FC<{ user: IUser }> = ({ user }) => {
  const { photo, userName, birthDate, country, gender, addInfo } = user;

  return (
    <div data-testid="user" className={userWrapper}>
      <div className={avatar}>
        <img className={img} src={photo} alt="avatar" />
      </div>

      <div className={wrapper}>
        <span className={title}>Name:</span>
        <span className={content}>{userName}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Birth date:</span>
        <span className={content}>{birthDate.replace(/[-]/g, '.')}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Country:</span>
        <span>{country}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Gender:</span>
        <span>{gender}</span>
      </div>

      <div className={wrapper}>
        <span className={title}>Preferences:</span>
        <ul>
          {addInfo.map((info, i) =>
            info ? (
              <li className={infoItem} key={i + Date.now()}>
                {info}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default User;
