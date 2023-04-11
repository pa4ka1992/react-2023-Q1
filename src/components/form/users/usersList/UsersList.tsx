import { type FC } from 'react';

import User from '../User/User';

import styles from './UsersList.module.scss';

import { IUser } from '~types/user';

export const UsersList: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <div data-testid="users" className={styles.usersList}>
      {users.map((user, i) => (
        <User user={user} key={i} />
      ))}
    </div>
  );
};
