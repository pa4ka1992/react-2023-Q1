import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from '../styles/RadioCheck.module.scss';

import { ICheckboxProps } from '~components/Form/_types';
import { ADD_INFO } from './_constants';

const { wrapper, label, header } = styles;

export const AddInfo: FC<ICheckboxProps> = ({ register, error }) => {
  const useFormObj = register('addInfo', {
    validate: (data) => {
      const message = 'At least one option should be chosen';

      return !data.length ? message : true;
    },
  });

  return (
    <>
      <div className="border">
        <p className="title">Choose your preferences</p>
        <div className={wrapper}>
          {ADD_INFO.map((info) => (
            <label className={label} key={info.id}>
              <span className={header}>{info.value}</span>
              <input data-testid="add-info" type="checkbox" value={info.value} {...useFormObj} />
            </label>
          ))}
        </div>

        <FormError error={error?.message} />
      </div>
    </>
  );
};
