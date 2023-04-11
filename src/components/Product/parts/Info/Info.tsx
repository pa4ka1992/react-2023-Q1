import { faCalendar, faCamera, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import styles from './Info.module.scss';

import { formateDate } from '@/helpers';
import { IPhoto } from '@/types/unsplash';

const { title, info, icon, fieldRow } = styles;

export const Info: FC<{ photo: IPhoto }> = ({ photo }) => {
  return (
    <div className={info}>
      <div className={fieldRow}>
        <FontAwesomeIcon className={icon} icon={faLocationDot} />
        <span className={title}> {photo.location?.name ?? 'Unknown location'}</span>
      </div>

      <div className={fieldRow}>
        <FontAwesomeIcon className={icon} icon={faCalendar} />
        <span className={title}>Published {formateDate(photo.created_at)}</span>
      </div>

      <div className={fieldRow}>
        <FontAwesomeIcon className={icon} icon={faCamera} />
        <span className={title}> {photo.exif?.name ?? 'Unknown gadget'}</span>
      </div>
    </div>
  );
};
