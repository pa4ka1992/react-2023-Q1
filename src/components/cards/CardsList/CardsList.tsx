import { Suspense, type FC } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { Unsplash } from '~services/unsplash/unsplash';

import { TPhotos } from '@/services/unsplash/_types';
import { isPhotoArray } from '@/type-guards/photo-array-type-guard';

const CardsList: FC = () => {
  const { cards } = useLoaderData() as { cards: TPhotos };

  return (
    <div>
      <Suspense fallback={<span>asdasd</span>}>
        <Await resolve={cards}>
          {(resolvedCards: unknown) => (
            <div>
              {isPhotoArray(resolvedCards) ? (
                <>
                  {resolvedCards.map((card) => (
                    <h1 key={card.id}>{card.id}</h1>
                  ))}
                </>
              ) : null}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const getPhotos = async () => {
  const photos = await Unsplash.getPhotos();

  return photos;
};

const cardsLoader = async (): Promise<{ cards: Promise<TPhotos | undefined> }> => {
  return { cards: getPhotos() };
};

export { CardsList, cardsLoader };
