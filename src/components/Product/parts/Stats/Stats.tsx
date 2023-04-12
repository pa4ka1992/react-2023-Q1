import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';

import styles from './Stats.module.scss';

import { IPhoto } from '~services/unsplash/_types';

const { title, icon, stats, fieldCol } = styles;

export const Stats: FC<{ photo: IPhoto }> = ({ photo }) => {
  return (
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
  );
};
