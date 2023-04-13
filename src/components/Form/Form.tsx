import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { AddInfo, Experience, Country, Hire, Photo, UserName } from '~components/Form/fields';
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

    const imageToString = URL.createObjectURL(data.photo[0]);

    setUser({ id: Date.now(), ...structuredClone(data), photo: imageToString });
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
          <Experience register={register} error={errors.experience} />
          <Country register={register} error={errors.country} />
          <AddInfo register={register} error={errors.addInfo} />
          <Hire register={register} error={errors.hire} />
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
