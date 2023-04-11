import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';

import { CardsList, Product, SearchBar, Spinner } from '@/components';

import styles from './Home.module.scss';

import { useAppSelector } from '~hooks/redux';
import { useLazyGetPhotosQuery, useLazySearchPhotoQuery } from '~store/reducers';

import { PAGE, PER_PAGE } from '~store/reducers/constants/unsplash';

export const HomePage: FC = () => {
  const { photoId } = useParams();
  const { search, cardsState } = useAppSelector((state) => state.homePageReducer);
  const [getPhotos, { isLoading: randomLoad }] = useLazyGetPhotosQuery();
  const [searchPhoto, { isLoading: searchLoad }] = useLazySearchPhotoQuery();

  useEffect(() => {
    search
      ? searchPhoto({ query: search, per_page: PER_PAGE })
      : getPhotos({ per_page: PER_PAGE, page: PAGE });
  }, [search, getPhotos, searchPhoto]);

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar />

      {randomLoad || searchLoad ? <Spinner /> : <CardsList />}

      {!randomLoad && !searchLoad && cardsState.length === 0 ? (
        <h4>Your search did not match any photos </h4>
      ) : null}

      {photoId ? <Product /> : null}
    </div>
  );
};
