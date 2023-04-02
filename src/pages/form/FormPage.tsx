import { useState, type FC } from 'react';

import { Form, UsersList } from '~compos/form/_index';

import { FieldValues } from '@/pages/form/_types';

export const FormPage: FC = () => {
  const [users, setUsers] = useState<FieldValues[]>([]);

  return (
    <>
      <Form setUsers={setUsers} />
      <UsersList users={users} />
    </>
  );
};
