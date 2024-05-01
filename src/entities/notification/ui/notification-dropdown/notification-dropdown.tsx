import { memo } from 'react';

import { Popover } from 'shared/ui/popups';
import NotificationIcon from 'shared/assets/icons/notifications.svg';

import { NotificationList } from '../notification-list/notification-list';

interface Props {
  className?: string;
}

const NotificationDropdown = memo((props: Props) => {
  const { className } = props;

  return (
    <Popover trigger={<NotificationIcon />}>
      <NotificationList className={className} />
    </Popover>
  );
});

export { NotificationDropdown };
