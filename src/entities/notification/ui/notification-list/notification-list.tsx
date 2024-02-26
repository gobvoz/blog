import { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { classNames } from 'shared/libs/class-names';

import { useNotificationList } from '../../api/notification-api';
import { NotificationItem } from '../notification-item/notification-item';

import cls from './notification-list.module.scss';

interface Props {
  className?: string;
}

// TODO: Add feature and move useNotificationList to the feature (check notifications when list is closed)
const NotificationList = memo((props: Props) => {
  const { className } = props;

  const userAuthData = useSelector(selectUserAuthData);
  const { data } = useNotificationList(userAuthData?.id || '0', {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  if (data) {
    return (
      <ul className={classNames(cls.notification, className)}>
        {data.map(dataItem => (
          <NotificationItem key={dataItem.id} notification={dataItem} />
        ))}
      </ul>
    );
  }

  return null;
});

export { NotificationList };
