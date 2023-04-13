import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Spinner } from '@/components';
import { Author, Image, Info, Stats, Tags } from '~components/Product/parts';

import styles from './Product.module.scss';

import { useGetSinglePhotoQuery } from '~store/reducers';

const { modal, container, closer, content, desc } = styles;

export const Product: FC = () => {
  const navigate = useNavigate();
  const { photoId } = useParams();

  const { data: photo, isLoading } = useGetSinglePhotoQuery(photoId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [photoId]);

  const closeHandler = () => {
    document.body.style.overflow = 'auto';

    navigate('/');
  };

  if (isLoading) {
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

          <Author photo={photo} />

          <h4 className={desc}>
            {photo?.description ? photo.description : photo?.alt_description}
          </h4>

          <Image photo={photo} data-testid="image" />
          <Stats photo={photo} />
          <Info photo={photo} />
          <Tags preview={photo?.tags_preview} />
        </section>
      </div>
    </section>
  );
};
