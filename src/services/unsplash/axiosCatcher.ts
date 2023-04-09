import { AxiosError } from 'axios';

export const axiosCatcher = async (request: () => Promise<unknown>): Promise<unknown> => {
  try {
    const res = await request();

    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      // console.log('error message: ', error.message);

      return error.message;
    } else {
      // console.log('unexpected error: ', error);

      return 'An unexpected error occurred';
    }
  }
};
