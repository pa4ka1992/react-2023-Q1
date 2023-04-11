import { useCallback, useEffect, useMemo } from 'react';

import { TPhotos } from '~types/unsplash';

import { GRID_COLUMNS, GRID_GAP } from '~components/cards/CardsList/_constants';

export const useLazyLoader = (container: React.RefObject<HTMLElement>, cardsState: TPhotos) => {
  useEffect(() => {
    if (container.current) {
      container.current.style.setProperty('--grid-columns', `${GRID_COLUMNS}`);
    }
  }, [container]);

  const { splittedArray } = useMemo(() => {
    const elementInGrid = Math.floor(cardsState.length / GRID_COLUMNS);
    const countInColumn = elementInGrid ?? 1;

    const splittedArray = [] as TPhotos[];

    for (let i = 0; i < cardsState.length; i += countInColumn) {
      const chunk = cardsState.slice(i, i + countInColumn);
      splittedArray.push(chunk);
    }

    return { splittedArray };
  }, [cardsState]);

  const getPreloadHeight = useCallback(
    (originWidth: number) => {
      const width = container.current?.clientWidth;

      return width ? (width - GRID_GAP * (GRID_COLUMNS - 1)) / GRID_COLUMNS / originWidth : 0;
    },
    [container]
  );

  return { splittedArray, getPreloadHeight };
};
