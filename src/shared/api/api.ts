import axios from 'axios';

import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN),
  },
});
