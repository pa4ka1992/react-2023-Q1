import { AxiosError } from 'axios';
import { describe, expect, test } from 'vitest';

import { axiosCatcher } from './axiosCatcher';

describe('unsplash', () => {
  test('axiosCatcher catches Errors', async () => {
    const error = async () => {
      throw new Error('error');
    };

    const axiosError = async () => {
      throw new AxiosError('axiosError');
    };

    const correct = async () => {
      return 'correct';
    };

    const errorRes = await axiosCatcher(error);
    const axiosErroRes = await axiosCatcher(axiosError);
    const correctRes = await axiosCatcher(correct);

    expect(errorRes).toEqual('An unexpected error occurred');
    expect(axiosErroRes).toEqual('axiosError');
    expect(correctRes).toEqual('correct');
  });
});
