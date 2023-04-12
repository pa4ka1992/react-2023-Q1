import { type FC } from 'react';

import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  return <div data-testid="spinner" className={styles.dualRing} />;
};
