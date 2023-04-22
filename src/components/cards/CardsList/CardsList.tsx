import { useRef, type FC } from 'react';

import { Spinner } from '~components/Spinner/Spinner';
import Card from '../Card/Card';

import styles from './CardsList.module.scss';

import { useLazyLoader } from '~hooks/lazyLoader';
import { useAppSelector } from '~hooks/redux';
import { useGetPhotosQuery, useSearchPhotoQuery } from '~store/reducers';

export const CardsList: FC = () => {
  const { search } = useAppSelector((state) => state.homePageReducer);
  const container = useRef<HTMLElement>(null);

  const { isUnsplashPending, page, per_page } = useAppSelector((state) => {
    const isUnsplashPending = Object.values(state.unsplashAPI.queries).some(
      (query) => query?.status === 'pending' && query.endpointName !== 'getSinglePhoto'
    );

    const { page, per_page } = state.homePageReducer;

    return { isUnsplashPending, page, per_page };
  });

  const { data: random = [] } = useGetPhotosQuery({
    per_page: per_page,
    page: page,
  });
  const { data: searchResult = [] } = useSearchPhotoQuery({
    query: search,
    per_page: per_page,
  });

  const { splittedArray, getPreloadHeight } = useLazyLoader(
    container,
    search ? searchResult : random
  );

  if (isUnsplashPending && !splittedArray.length) {
    return (
      <section ref={container}>
        <Spinner />
      </section>
    );
  }

  if (!isUnsplashPending && search && !searchResult.length) {
    return (
      <section className={styles.isNotMatch} ref={container}>
        <h4 data-testid="not-match">Your search did not match any photos... </h4>
      </section>
    );
  }

  return (
    <section data-testid="card-list" ref={container} className={styles.list}>
      {splittedArray?.map((column, order) => (
        <div key={order} className={styles.column}>
          {column.map((photo) => (
            <Card key={photo.id} photo={photo} lazyLoader={getPreloadHeight} />
          ))}
        </div>
      ))}
    </section>
  );
};
