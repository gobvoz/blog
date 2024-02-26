import { rtkApi } from 'shared/api/rtk-api';

import { Notification } from '../model/types/notification';

const notificationListApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetch: build.query<Notification[], string>({
      query: id => ({
        url: `/notifications`,
        params: {
          profileId: id,
        },
      }),
    }),
  }),
});

const useNotificationList = notificationListApi.useFetchQuery;

export { notificationListApi, useNotificationList };
