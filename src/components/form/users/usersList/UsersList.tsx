import { type FC } from 'react';

import { User } from '@/components/form/users/user/User';

import styles from './UsersList.module.scss';

import { FieldValues } from '@/pages/Form/_types';

export const UsersList: FC<{ users: FieldValues[] }> = ({ users }) => {
  return (
    <div data-testid="users" className={styles.usersList}>
      {users.map((user, i) => (
        <User user={user} key={i} />
      ))}
    </div>
  );
};
