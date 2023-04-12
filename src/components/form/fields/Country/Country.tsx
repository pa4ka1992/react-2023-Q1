import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from './Country.module.scss';

import { COUNTRIES, SELECT } from './_constants';

import { IFormProps } from '~compos/form/_types';

export const Country: FC<IFormProps> = ({ register, error }) => {
  const validateHandler = (data: string) => {
    return data === SELECT.defOption ? SELECT.message : true;
  };

  return (
    <>
      <label className="border">
        <p className="title">Choose country:</p>
        <select
          className={styles.select}
          defaultValue={SELECT.defOption}
          {...register('country', { validate: validateHandler })}
        >
          <option value={SELECT.defOption} hidden disabled>
            Choose a country
          </option>
          Choose here
          {COUNTRIES.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>

        <FormError error={error?.message} />
      </label>
    </>
  );
};
