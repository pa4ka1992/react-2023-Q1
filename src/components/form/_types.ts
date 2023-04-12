import { FieldValues } from '@/pages/Form/_types';
import { type FieldError, type Merge, type UseFormRegister } from 'react-hook-form';

export interface IFormProps {
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  isReseted?: boolean;
}

export interface ICheckboxProps {
  register: UseFormRegister<FieldValues>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}
