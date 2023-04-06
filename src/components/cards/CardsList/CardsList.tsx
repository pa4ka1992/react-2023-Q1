import { Suspense, type FC } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import { Unsplash } from '~services/unsplash/unsplash';

import { TPhotos } from '@/services/unsplash/_types';
import { isPhotoArray } from '@/type-guards/photo-array-type-guard';

const CardsList: FC = () => {
  const { cards } = useLoaderData() as { cards: TPhotos };

  if (isPhotoArray(cards)) {
    console.log(cards);
  }

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

const cardsLoader = async (): Promise<ReturnType<typeof defer>> => {
  const getPhotos = async () => {
    const photos = await Unsplash.getPhotos();

    return photos || undefined;
  };

  return defer({
    cards: getPhotos(),
  });
};

export { CardsList, cardsLoader };
