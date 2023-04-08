import {
  faCalendar,
  faCamera,
  faDownload,
  faEye,
  faLocationDot,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Spinner } from '~compos/_index';

import styles from './Product.module.scss';

import { formateDate } from '@/helpers/formatDate';

import { IPhoto } from '@/services/unsplash/_types';
import { getSinglePhoto } from '~helpers/_index';

const {
  modal,
  closer,
  content,
  wrapImg,
  img,
  desc,
  title,
  info,
  icon,
  tags,
  tagsHeader,
  wrapTags,
  tagElem,
  stats,
  author,
  avatar,
  authorNick,
  fieldCol,
  fieldRow,
} = styles;

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
      <section onClick={closeHandler} className={modal}>
        <Spinner />;
      </section>
    );
  }

  return (
    <section onClick={closeHandler} className={modal}>
      <section onClick={(e) => e.stopPropagation()} className={content}>
        <div onClick={closeHandler} className={closer}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <section className={author}>
          <img className={avatar} src={photo.user.profile_image.small} alt="avatar" />
          <div>
            <p>{`${photo.user.first_name}  ${photo.user.last_name}`}</p>
            <p className={authorNick}>{photo.user.username}</p>
          </div>
        </section>

        <h4 className={desc}>{photo.description ? photo.description : photo.alt_description}</h4>

        <div className={wrapImg}>
          <img className={img} src={photo.urls.regular} alt="photo" />
        </div>

        <div className={stats}>
          <div className={fieldCol}>
            <FontAwesomeIcon className={icon} icon={faEye} />
            <span className={title}> {photo.views?.toLocaleString('en')}</span>
          </div>

          <div className={fieldCol}>
            <FontAwesomeIcon className={icon} icon={faDownload} />
            <span className={title}> {photo.downloads?.toLocaleString('en')}</span>
          </div>
        </div>

        <div className={info}>
          <div className={fieldRow}>
            <FontAwesomeIcon className={icon} icon={faLocationDot} />
            <span className={title}> {photo.location.name}</span>
          </div>

          <div className={fieldRow}>
            <FontAwesomeIcon className={icon} icon={faCalendar} />
            <span className={title}>Published {formateDate(photo.created_at)}</span>
          </div>

          <div className={fieldRow}>
            <FontAwesomeIcon className={icon} icon={faCamera} />
            <span className={title}> {photo.exif?.name}</span>
          </div>
        </div>

        <div className={tags}>
          <h4 className={tagsHeader}>Related tags</h4>
          <div className={wrapTags}>
            {photo.tags_preview?.map((tag, i) => (
              <span className={tagElem} key={i}>
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
