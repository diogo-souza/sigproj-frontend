/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'querystring';

export const parseQueryToObject = (queryString: string) => {
  return qs.parse(queryString?.slice(1));
};

export const parseObjectToQuery = (obj: any) => {
  return new URLSearchParams(obj).toString();
};
