import { Dispatch, SetStateAction } from 'react';
import { describe, expect, test } from 'vitest';

import { checkSearch, formateDate, getSinglePhoto } from '.';

import { IPhoto, TPhotos } from '~services/unsplash/_types';

describe('formate date', () => {
  test('formates date correctly', () => {
    expect(formateDate('2017-02-02')).toBe('02-02-2017');
  });
});

describe('get a single photo', () => {
  const setPhoto: Dispatch<SetStateAction<IPhoto | undefined>> = vi.fn();

  vi.mock('react', () => ({
    useState: (photo: undefined) => [photo, setPhoto],
  }));

  test('gets one photo', async () => {
    await getSinglePhoto('8bYABbKgBYQ', setPhoto);

    expect(setPhoto).toHaveBeenCalledTimes(1);
  });
});

describe('check search', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  const setSearchVal: Dispatch<SetStateAction<string>> = vi.fn();
  const setCards: Dispatch<SetStateAction<TPhotos>> = vi.fn();
  const setIsFetching: Dispatch<SetStateAction<boolean>> = vi.fn();

  vi.mock('react', () => ({
    useState: (searchVal: string) => [searchVal, setSearchVal],
  }));

  vi.mock('react', () => ({
    useState: (cards: TPhotos) => [cards, setCards],
  }));

  vi.mock('react', () => ({
    useState: (isFetching: false) => [isFetching, setIsFetching],
  }));

  test('handles search string', async () => {
    await checkSearch('dog', setSearchVal, setCards, setIsFetching);

    expect(setSearchVal).toHaveBeenCalledTimes(1);
    expect(setCards).toHaveBeenCalledTimes(1);
    expect(setIsFetching).toHaveBeenCalledTimes(1);
  });

  test('handles empty state', async () => {
    await checkSearch('', setSearchVal, setCards, setIsFetching);

    expect(setSearchVal).toHaveBeenCalledTimes(0);
    expect(setCards).toHaveBeenCalledTimes(1);
    expect(setIsFetching).toHaveBeenCalledTimes(1);
  });
});
