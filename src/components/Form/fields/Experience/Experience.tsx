import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import styles from '~global/scss/Input.module.scss';
import '../styles/Field.scss';

import { IFormProps } from '~components/Form/_types';

export const Experience: FC<IFormProps> = ({ register, error }) => {
  const validateHandler = (data: string) => {
    const year = data.slice(0, 4);
    return Number(year) < 1923 ? 'You can`t be older than 100 years' : true;
  };

  const useFormObj = {
    ...register('experience', {
      required: 'Experience is required',
      pattern: {
        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/i,
        message: 'Experience must be a valid date in the format  DD.MM.YYYY',
      },
      validate: validateHandler,
    }),
  };

  return (
    <>
      <label className="border">
        <p className="title">As a photographer since</p>
        <input className={styles.input} type="date" {...useFormObj} />

        <FormError error={error?.message} />
      </label>
    </>
  );
};
