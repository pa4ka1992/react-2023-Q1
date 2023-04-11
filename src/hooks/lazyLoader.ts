import { useEffect, useMemo } from 'react';

import { TPhotos } from '~types/unsplash';

import { GRIDCOLUMNS } from '~components/cards/CardsList/_constants';

export const useLazyLoader = (container: React.RefObject<HTMLElement>, cardsState: TPhotos) => {
  useEffect(() => {
    if (container.current) {
      container.current.style.setProperty('--grid-columns', `${GRIDCOLUMNS}`);
    }
  }, [container]);

  const { splittedArray, containerRef } = useMemo(() => {
    const elementInGrid = Math.floor(cardsState.length / GRIDCOLUMNS);
    const countInColumn = elementInGrid ?? 1;

    const splittedArray = [] as TPhotos[];

    for (let i = 0; i < cardsState.length; i += countInColumn) {
      const chunk = cardsState.slice(i, i + countInColumn);
      splittedArray.push(chunk);
    }

    const containerRef = container.current ?? null;

    return { splittedArray, containerRef };
  }, [container, cardsState]);

  return { splittedArray, containerRef };
};
