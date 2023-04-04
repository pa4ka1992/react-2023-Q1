import { type FC } from 'react';

import { FormError } from '../error/FormError';

import '../styles/Field.scss';
import styles from '../styles/RadioCheck.module.scss';

import { IFormProps } from '~compos/form/_types';

const { header, wrapper, label, check } = styles;

export const Gender: FC<IFormProps> = ({ register, error }) => {
  register('gender', {
    required: 'Gender is requaired',
  });

  return (
    <div className="border">
      <p className="title">Choose your gender:</p>
      <div className={wrapper}>
        <label className={label}>
          <p className={header}>Male</p>
          <input className={check} type="radio" value="male" {...register('gender')} />
        </label>
        <label className={label}>
          <p className={header}>Female</p>
          <input className={check} type="radio" value="female" {...register('gender')} />
        </label>
      </div>

      <FormError error={error?.message} />
    </div>
  );
};
