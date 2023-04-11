import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Spinner } from '@/components';
import { Author, Image, Info, Stats, Tags } from '~components/Product/parts';

import styles from './Product.module.scss';

import { getSinglePhoto } from '@/helpers';

import { IPhoto } from '~services/unsplash/_types';

const { modal, container, closer, content, desc } = styles;

export const Product: FC = () => {
  const navigate = useNavigate();
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<IPhoto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

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
      <section onClick={closeHandler} className={modal}>
        <div className={container}>
          <Spinner />;
        </div>
      </section>
    );
  }

  return (
    <section data-testid="product" onClick={closeHandler} className={modal}>
      <div className={container}>
        <section onClick={(e) => e.stopPropagation()} className={content}>
          <div onClick={closeHandler} className={closer}>
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <Author photo={photo} setIsLoading={setIsLoading} />

          <h4 className={desc}>{photo.description ? photo.description : photo.alt_description}</h4>

          <Image photo={photo} isLoading={isLoading} setIsLoading={setIsLoading} />
          <Stats photo={photo} />
          <Info photo={photo} />
          <Tags preview={photo.tags_preview} />
        </section>
      </div>
    </section>
  );
};
