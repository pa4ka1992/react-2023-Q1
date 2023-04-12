import { type FC } from 'react';

import styles from './Tags.module.scss';

const { tags, wrapTags, tagElem } = styles;

export const Tags: FC<{ preview: { title: string }[] | undefined }> = ({ preview }) => {
  return (
    <>
      {preview?.length ? (
        <div className={tags}>
          <h4>Related tags</h4>
          <div className={wrapTags}>
            {preview?.map((tag, i) => (
              <span className={tagElem} key={i}>
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
