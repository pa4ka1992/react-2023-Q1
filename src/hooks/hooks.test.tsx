import { cleanup, render, renderHook, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { useLazyLoader } from '~hooks/lazyLoader';
import { RANDOM_PHOTOS_ARRAY_MOCK } from '~store/reducers/constants/unsplash.mock';

describe('lazyLoader', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();

    cleanup();
  });

  test('returns correct value', async () => {
    const containerRef = createRef<HTMLDivElement>();

    render(<div ref={containerRef} style={{ width: '1000px' }}></div>);

    vi.spyOn(containerRef.current, 'clientWidth' as never, 'get').mockImplementation(
      () => 1000 as never
    );

    const { result } = renderHook(() => useLazyLoader(containerRef, RANDOM_PHOTOS_ARRAY_MOCK));

    await waitFor(() => {
      expect(result.current.getPreloadHeight(200)).toEqual(1.16);
    });
  });
});
