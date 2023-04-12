import { render, screen } from '@testing-library/react';
import { User } from './User';

describe('User', () => {
  it('renders', () => {
    // const file = new File([avatar], 'avatar.png', { type: 'png' });

    const user = {
      userName: 'vasia',
      birthDate: '02.03.1822',
      country: 'gvadelupa',
      addInfo: ['bla', 'bla'],
      gender: 'transegender',
      photo: undefined,
    };

    render(<User user={user} />);

    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
