import { type FC } from 'react';
import { FormError } from '../error/FormError';

import styles from '~global/scss/Input.module.scss';
import '../styles/Field.scss';

import { IFormProps } from '~compos/form/_types';

export const UserName: FC<IFormProps> = ({ register, error }) => {
  const useFormObj = {
    ...register('userName', {
      required: 'Full name is required',
      pattern: {
        value: /^[a-zа-я]{3,}\s+[a-zа-я]{3,}/i,
        message: 'Should be composed no less than two words, at least three letters length each',
      },
    }),
  };

  return (
    <>
      <label className="border">
        <p className="title">Full name:</p>
        <input className={styles.input} type="text" {...useFormObj} />

        <FormError error={error?.message} />
      </label>
    </>
  );
};
