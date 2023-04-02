import { FC } from 'react';

import styles from './Modal.module.scss';

export const Modal: FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <span className={styles.content}>User is succesfully added</span>
      </div>
    </div>
  );
};
