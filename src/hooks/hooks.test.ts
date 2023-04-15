import { cleanup, renderHook } from '@testing-library/react';
import { createRef } from 'react';
import { useLazyLoader } from '~hooks/lazyLoader';
import { RANDOM_PHOTOS_ARRAY_MOCK } from '~store/reducers/constants/mockUnsplash';

describe('lazyLoader', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('returns correct value', async () => {
    const a = createRef<HTMLDivElement>();
    console.log(a);
    const { result } = renderHook(() => useLazyLoader(a, RANDOM_PHOTOS_ARRAY_MOCK));

    console.log(result);
  });
});
