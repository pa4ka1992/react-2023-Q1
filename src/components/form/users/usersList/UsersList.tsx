import { type FC } from 'react';

import { User } from '@/components/form/users/User/User';

import styles from './UsersList.module.scss';

import { IUser } from '@/pages/Form/_types';

export const UsersList: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <div data-testid="users" className={styles.usersList}>
      {users.map((user, i) => (
        <User user={user} key={i} />
      ))}
    </div>
  );
};
