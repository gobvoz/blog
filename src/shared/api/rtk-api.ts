import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_BASE_URL__,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN) || '';

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
