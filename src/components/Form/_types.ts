import { type FieldError, type Merge, type UseFormRegister } from 'react-hook-form';
import { IForm } from '~types/user';

export interface IFormProps {
  register: UseFormRegister<IForm>;
  error?: FieldError;
  isReseted?: boolean;
}

export interface ICheckboxProps {
  register: UseFormRegister<IForm>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}
