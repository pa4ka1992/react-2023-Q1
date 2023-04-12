import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from './Country.module.scss';

import { IFormProps } from '~components/Form/_types';

import { COUNTRIES, COUNTRIES_SETTINGS } from './_constants';

export const Country: FC<IFormProps> = ({ register, error }) => {
  const validateHandler = (data: string) => {
    return data === COUNTRIES_SETTINGS.defOption ? COUNTRIES_SETTINGS.message : true;
  };

  return (
    <>
      <label className="border">
        <p className="title">Choose country:</p>
        <select
          className={styles.select}
          defaultValue={COUNTRIES_SETTINGS.defOption}
          {...register('country', { validate: validateHandler })}
        >
          <option value={COUNTRIES_SETTINGS.defOption} hidden disabled>
            Choose a country
          </option>
          Choose here
          {COUNTRIES.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <FormError error={error?.message} />
      </label>
    </>
  );
};
