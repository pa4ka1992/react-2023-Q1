import { LocalStorageService } from '@/services/localStorage';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  afterEach(() => {
    localStorage.clear();
  });

  const LS = new LocalStorageService('react');

  LS.setItem('search', 'vasia');
  render(<SearchBar />);

  const input = screen.getByRole('search-input') as HTMLInputElement;

  it('loads from LS', () => {
    expect(input.value).toBe('vasia');
  });

  it('updates input value', () => {
    fireEvent.change(input, { target: { value: '1111' } });

    expect(input.value).toBe('1111');
  });
});
