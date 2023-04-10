import { IUser } from '@/pages/Form/_types';
import { type FieldError, type Merge, type UseFormRegister } from 'react-hook-form';

export interface IFormProps {
  register: UseFormRegister<IUser>;
  error?: FieldError;
  isReseted?: boolean;
}

export interface ICheckboxProps {
  register: UseFormRegister<IUser>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}
