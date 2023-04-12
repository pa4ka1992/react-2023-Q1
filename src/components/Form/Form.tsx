import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { AddInfo, BirthDate, Country, Gender, Photo, UserName } from '~components/Form/fields';
import { Modal } from './Modal/Modal';

import buttonStyle from '~global/scss/Button.module.scss';
import styles from './Form.module.scss';

import { useActions } from '~hooks/actions';

import { IForm } from '~types/user';

const { form, grid } = styles;

export const Form: FC = () => {
  const { setUser } = useActions();
  const [isReseted, setIsReseted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const submitHandler: SubmitHandler<IForm> = (data, e) => {
    e?.preventDefault();

    setUser({ id: Date.now(), ...structuredClone(data) });
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
