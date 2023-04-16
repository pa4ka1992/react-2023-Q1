import { type FC } from 'react';

import User from '../User/User';

import { useAppSelector } from '~hooks/redux';
import styles from './UsersList.module.scss';

export const UsersList: FC = () => {
  const { users } = useAppSelector((state) => state.formPageReducer);

  return (
    <div data-testid="users" className={styles.usersList}>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};
