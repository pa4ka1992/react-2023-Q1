import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { AddInfo, BirthDate, Country, Gender, Photo, UserName } from '~compos/form/fields/_index';

import buttonStyle from '~global/scss/Button.module.scss';
import styles from './Form.module.scss';

import { FieldValues } from '@/pages/form/_types';
import { Modal } from '../modal/Modal';

const { form, header, grid } = styles;

type TProps = {
  setUsers: React.Dispatch<React.SetStateAction<FieldValues[]>>;
};

export const Form: FC<TProps> = ({ setUsers }) => {
  const [isReseted, setIsReseted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const submitHandler: SubmitHandler<FieldValues> = async (data, e) => {
    console.log(data);

    e?.preventDefault();
    await setUsers((prev) => [...prev, structuredClone(data)]);
    setIsReseted(true);

    setTimeout(() => {
      setIsReseted(false);
      reset();
    }, 2000);
  };

  return (
    <>
      <form className={form} onSubmit={handleSubmit(submitHandler)}>
        <h3 className={header}>Form</h3>
        <div className={grid}>
          <UserName register={register} error={errors.userName} />
          <BirthDate register={register} error={errors.birthDate} />
          <Country register={register} error={errors.country} />
          <AddInfo register={register} error={errors.addInfo} />
          <Gender register={register} error={errors.gender} />
          <Photo register={register} error={errors.photo} isReseted={isReseted} />
        </div>
        <button
          className={buttonStyle.button}
          onClick={() => {
            console.log(errors);
          }}
          type="submit"
        >
          Add
        </button>
        {isReseted ? <Modal /> : null}
      </form>
    </>
  );
};
