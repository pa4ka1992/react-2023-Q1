import { AxiosError } from 'axios';

export const axiosCatcher = async (request: () => unknown) => {
  try {
    return request();
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const { status, message } = error.response.data;

      console.log(`status: ${status}; error: ${message}`);

      return message;
    }
    console.log(error);
  }
};
