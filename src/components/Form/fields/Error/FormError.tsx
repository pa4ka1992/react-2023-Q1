import { type FC } from 'react';

import styles from './FormError.module.scss';

const FormError: FC<{ error?: string }> = ({ error }) => {
  return error ? <div className={styles.error}>{error}</div> : null;
};

export default FormError;
