import { useRef, type FC } from 'react';

import { Spinner } from '~components/Spinner/Spinner';
import Card from '../Card/Card';

import styles from './CardsList.module.scss';

import { useLazyLoader } from '~hooks/lazyLoader';
import { useAppSelector } from '~hooks/redux';
import { useGetPhotosQuery, useSearchPhotoQuery } from '~store/reducers';

import { PAGE, PER_PAGE } from '~store/reducers/constants/unsplash';

export const CardsList: FC = () => {
  const { search } = useAppSelector((state) => state.homePageReducer);
  const container = useRef<HTMLElement>(null);

  const isUnsplashPending = useAppSelector((state) =>
    Object.values(state.unsplashAPI.queries).some(
      (query) => query?.status === 'pending' && query.endpointName !== 'getSinglePhoto'
    )
  );

  const { data: random = [] } = useGetPhotosQuery({
    per_page: PER_PAGE,
    page: PAGE,
  });
  const { data: searchResult = [] } = useSearchPhotoQuery({
    query: search,
    per_page: PER_PAGE,
  });

  const { splittedArray, getPreloadHeight } = useLazyLoader(
    container,
    search ? searchResult : random
  );

  if (isUnsplashPending) {
    return (
      <section ref={container}>
        <Spinner />
      </section>
    );
  }

  if (!isUnsplashPending && search && !searchResult.length) {
    return (
      <section className={styles.isNotMatch} ref={container}>
        <h4>Your search did not match any photos... </h4>
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
