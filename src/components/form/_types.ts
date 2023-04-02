import { type FieldError, type Merge, type UseFormRegister } from 'react-hook-form';
import { FieldValues } from '~pages/form/_types';

export interface IFormProps {
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  isReseted?: boolean;
}

export interface ICheckboxProps {
  register: UseFormRegister<FieldValues>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}
