import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from '../styles/RadioCheck.module.scss';

import { IFormProps } from '~components/Form/_types';

const { header, wrapper, label } = styles;

export const Hire: FC<IFormProps> = ({ register, error }) => {
  register('hire', {
    required: 'Hire status is requaired',
  });

  return (
    <div className="border">
      <p className="title">Avaliable to hire</p>
      <div className={wrapper}>
        <label className={label}>
          <p className={header}>Yes</p>
          <input type="radio" value="yes" {...register('hire')} />
        </label>
        <label className={label}>
          <p className={header}>No</p>
          <input type="radio" value="no" {...register('hire')} />
        </label>
      </div>

      <FormError error={error?.message} />
    </div>
  );
};
