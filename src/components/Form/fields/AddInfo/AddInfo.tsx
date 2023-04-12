import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from '../styles/RadioCheck.module.scss';

import { ICheckboxProps } from '~components/Form/_types';
import { ADD_INFO } from './_constants';

const { wrapper, label, header } = styles;

export const AddInfo: FC<ICheckboxProps> = ({ register, error }) => {
  const validateHandler = (data: string[]) => {
    const message = 'Atleast one option should be chosen';
    if (!data) return message;

    return data.some((val) => val) ? true : message;
  };

  register('addInfo', {
    validate: validateHandler,
  });

  return (
    <>
      <div className="border">
        <p className="title">Choose your produt preferences:</p>
        <div className={wrapper}>
          {ADD_INFO.map((info) => (
            <label className={label} key={info.id}>
              <span className={header}>{info.value}</span>
              <input type="checkbox" value={info.value} {...register(`addInfo.${info.id}`)} />
            </label>
          ))}
        </div>

        <FormError error={error?.message} />
      </div>
    </>
  );
};
