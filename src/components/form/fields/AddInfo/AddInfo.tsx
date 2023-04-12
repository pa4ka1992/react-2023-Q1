import { type FC } from 'react';

import { FormError } from '../Error/FormError';

import '../styles/Field.scss';
import styles from '../styles/RadioCheck.module.scss';

import { ICheckboxProps } from '~compos/form/_types';

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
          <label className={label}>
            <span className={header}>Clothing</span>
            <input type="checkbox" value="clothing" {...register('addInfo.0')} />
          </label>
          <label className={label}>
            <span className={header}>Jewelery</span>
            <input type="checkbox" value="jewelery" {...register('addInfo.1')} />
          </label>
          <label className={label}>
            <span className={header}>Electronics</span>
            <input type="checkbox" value="electronics" {...register('addInfo.2')} />
          </label>
        </div>

        <FormError error={error?.message} />
      </div>
    </>
  );
};
