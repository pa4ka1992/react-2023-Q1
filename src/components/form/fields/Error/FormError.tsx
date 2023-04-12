import { type FC } from 'react';

import styles from './FormError.module.scss';

export const FormError: FC<{ error?: string }> = ({ error }) => {
  return error ? <div className={styles.error}>{error}</div> : null;
};
