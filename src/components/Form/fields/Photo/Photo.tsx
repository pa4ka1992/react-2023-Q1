import React, { useEffect, useState, type FC } from 'react';

import FormError from '../Error/FormError';

import buttonStyle from '~global/scss/Button.module.scss';
import '../styles/Field.scss';
import styles from './Photo.module.scss';

import { IFormProps } from '~components/Form/_types';

export const Photo: FC<IFormProps> = ({ register, error, isReseted }) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    if (isReseted) {
      setImg('');
    }
  }, [isReseted]);

  const uploadHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length > 0) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  };

  const useFormObj = {
    ...register('photo', {
      required: 'Choose image for avatar',
      onChange: uploadHandler,
    }),
  };

  return (
    <>
      <label className="border">
        <p className="title">Choose avatar:</p>
        <label className={buttonStyle.button}>
          <span>Choose file</span>
          <input
            className={styles.input}
            type="file"
            accept="image/png, image/jpeg"
            {...useFormObj}
          />
        </label>

        {img ? <img className={styles.img} src={img} alt="avatar" /> : null}

        <FormError error={error?.message} />
      </label>
    </>
  );
};
