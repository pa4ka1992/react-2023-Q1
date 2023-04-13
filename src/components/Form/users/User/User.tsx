import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faLocationDot,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import styles from './User.module.scss';

import { getExperience } from '@/helpers';

import { IUser } from '~types/user';

const { userWrapper, avatar, img, info, fullName, wrapper, icon, positive, negative, prefersItem } =
  styles;

const User: FC<{ user: IUser }> = ({ user }) => {
  const { photo, userName, experience, country, hire, addInfo } = user;

  return (
    <section data-testid="user" className={userWrapper}>
      <div className={avatar}>
        <img className={img} src={photo} alt="avatar" />
      </div>

      <div className={info}>
        <p className={fullName}>{userName}</p>

        <div className={wrapper}>
          <FontAwesomeIcon className={icon} icon={faBagShopping} />
          <span>{getExperience(experience)}</span>
        </div>

        <div className={wrapper}>
          <FontAwesomeIcon className={icon} icon={faLocationDot} />
          <span>{country}</span>
        </div>

        <div className={wrapper}>
          {hire === 'yes' ? (
            <>
              <FontAwesomeIcon className={`${icon} ${positive}`} icon={faCircleCheck} />
              <span>Avaliable to hire</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon className={`${icon} ${negative}`} icon={faCircleXmark} />
              <span>Unavaliable to hire</span>
            </>
          )}
        </div>

        <ul className={wrapper}>
          {addInfo.map((info, i) =>
            info ? (
              <li className={prefersItem} key={i + Date.now()}>
                {info}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </section>
  );
};

export default User;
