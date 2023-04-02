import { type FC } from 'react';

import { User } from '~compos/form/users/user/User';

import styles from './UsersList.module.scss';

import { FieldValues } from '@/pages/form/_types';

export const UsersList: FC<{ users: FieldValues[] }> = ({ users }) => {
  return (
    <div className={styles.usersList}>
      {users.map((user, i) => (
        <User user={user} key={i} />
      ))}
    </div>
  );
};
