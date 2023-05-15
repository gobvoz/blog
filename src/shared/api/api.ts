import axios from 'axios';

import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';

export const api = axios.create({
  baseURL: __API_BASE_URL__,
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN),
  },
});
