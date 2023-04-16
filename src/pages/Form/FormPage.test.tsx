import { fireEvent, screen } from '@testing-library/react';

import { FormPage } from './FormPage';

import * as reduxHooks from '@/hooks/redux';
import { renderWithProviders } from '~utils/withProviders';

describe('Form', () => {
  vi.spyOn(reduxHooks, 'useAppDispatch');
  vi.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({
    users: [
      {
        id: 1,
        userName: 'vasia',
        experience: '02.03.1822',
        country: 'gvadelupa',
        addInfo: ['bla', 'bla'],
        hire: 'yes',
        photo: 'photo',
      },
    ],
  });

  test('updates users list', async () => {
    renderWithProviders(<FormPage />, '/form');

    const file = new File(['(⌐□_□)'], 'avatar.png', { type: 'image/png' });

    const avatar = screen.getByLabelText('avatar');
    const addInfo = screen.getAllByRole('add-info');
    const userName = screen.getByRole('user-name');
    const country = screen.getByRole('country');
    const experience = screen.getByRole('experience');
    const hire = screen.getByRole('hire-yes');

    const form = screen.getByTestId('form');
    const users = screen.getByTestId('users');

    await fireEvent.change(userName, { target: { value: 'catsa asdasd' } });
    await fireEvent.change(country, { target: { value: 'Belarus' } });
    await fireEvent.change(experience, { target: { value: '2017-02-02' } });
    await fireEvent.click(hire);
    await fireEvent.change(avatar, { target: { files: [file] } });
    await fireEvent.click(addInfo[0]);
    await fireEvent.submit(form);

    expect(form).toBeInTheDocument();
    expect(users).toBeInTheDocument();

    const user = await screen.findByTestId('user');

    expect(reduxHooks.useAppDispatch).toHaveBeenCalledTimes(1);

    expect(user).toBeInTheDocument();
  });
});
