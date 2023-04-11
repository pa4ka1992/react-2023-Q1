import { useState, type FC } from 'react';

import { Form, UsersList } from '@/components/form';

import { IUser } from '@/pages/Form/_types';

export const FormPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <>
      <Form setUsers={setUsers} />
      <UsersList users={users} />
    </>
  );
};
