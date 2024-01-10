import { AxiosResponse } from 'axios';

export const checkResponse = (res: AxiosResponse): Promise<AxiosResponse> => {
  if (res.status > 399) {
    return Promise.reject(res);
  }
  return Promise.resolve(res);
};
