import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { AddInfo, BirthDate, Country, Gender, Photo, UserName } from '~components/form/fields';

import buttonStyle from '~global/scss/Button.module.scss';
import styles from './Form.module.scss';

import { IUser } from '~types/user';
import { Modal } from './Modal/Modal';

const { form, grid } = styles;

type TProps = {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
};

export const Form: FC<TProps> = ({ setUsers }) => {
  const [isReseted, setIsReseted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const submitHandler: SubmitHandler<IUser> = (data, e) => {
    e?.preventDefault();
    setUsers((prev) => [...prev, structuredClone(data)]);
    setIsReseted(true);

    setTimeout(() => {
      setIsReseted(false);
      reset();
    }, 2000);
  };

  return (
    <>
      <form data-testid="form" className={form} onSubmit={handleSubmit(submitHandler)}>
        <h3>Form</h3>
        <div className={grid}>
          <UserName register={register} error={errors.userName} />
          <BirthDate register={register} error={errors.birthDate} />
          <Country register={register} error={errors.country} />
          <AddInfo register={register} error={errors.addInfo} />
          <Gender register={register} error={errors.gender} />
          <Photo register={register} error={errors.photo} isReseted={isReseted} />
        </div>
        <button className={buttonStyle.button} type="submit">
          Add
        </button>
        {isReseted ? <Modal /> : null}
      </form>
    </>
  );
};
