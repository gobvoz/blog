import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';

import { Notification } from '../../model/types/notification';

import cls from './notification-item.module.scss';
import { TextBlock } from 'shared/ui/text-block';
import { AppLink } from 'shared/ui/app-link';

interface Props {
  className?: string;

  notification: Notification;
}

const NotificationItem = memo((props: Props) => {
  const { className, notification } = props;

  const content = (
    <TextBlock small className={cls.date} header={notification.title} headerTag="h4">
      {notification.message}
    </TextBlock>
  );

  if (notification.href) {
    return (
      <li className={classNames(cls.notificationItem, className)}>
        <AppLink to={notification.href}>{content}</AppLink>
      </li>
    );
  }

  return <li className={classNames(cls.notificationItem, className)}>{content}</li>;
});

export { NotificationItem };
