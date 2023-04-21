import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import User from './User';

import { renderWithProviders } from '~utils/withProviders';

describe('User', () => {
  const USER = {
    id: 1,
    userName: 'vasia',
    experience: '02.03.1822',
    country: 'gvadelupa',
    addInfo: ['bla', 'bla'],
    hire: 'yes',
    photo: 'photo',
  };

  renderWithProviders(<User user={USER} />, '/');

  test('renders', () => {
    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
