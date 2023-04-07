import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Spinner } from '~compos/_index';

import styles from './Product.module.scss';

import { IPhoto } from '@/services/unsplash/_types';
import { getSinglePhoto } from '~helpers/_index';

export const Product: FC = () => {
  const navigate = useNavigate();
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<IPhoto | undefined>(undefined);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (photoId) {
      getSinglePhoto(photoId, setPhoto);
    }
  }, [photoId]);

  const closeHandler = () => {
    document.body.style.overflow = 'auto';

    navigate('/');
  };

  if (!photo) {
    return (
      <section onClick={closeHandler} className={styles.modal}>
        <Spinner />;
      </section>
    );
  }

  return (
    <section onClick={closeHandler} className={styles.modal}>
      {photoId}
    </section>
  );
};
