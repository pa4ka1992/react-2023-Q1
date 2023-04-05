import { LocalStorageService } from '@/services/storage/localStorage';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  afterEach(() => {
    localStorage.clear();
  });

  const LS = new LocalStorageService('react');

  it('loads from LS', () => {
    LS.setItem('search', 'vasia');
    render(<SearchBar />);

    const input = screen.getByRole('search-input') as HTMLInputElement;
    expect(input.value).toBe('vasia');
  });

  it('updates input value', () => {
    render(<SearchBar />);

    const input = screen.getByRole('search-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '1111' } });

    expect(input.value).toBe('1111');
  });
});
