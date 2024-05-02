import { memo, useState } from 'react';

import { Popover } from 'shared/ui/popups';
import NotificationIcon from 'shared/assets/icons/notifications.svg';

import { NotificationList } from '../notification-list/notification-list';
import { isMobile } from 'shared/libs/is-mobile/is-mobile';
import { Drawer } from 'shared/ui/drawer';
import { Button } from 'shared/ui/button';

interface Props {
  className?: string;
}

const NotificationDropdown = memo((props: Props) => {
  const { className } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNotificationClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  // TODO: Add feature and move useNotificationList to the feature (check notifications when list is closed)
  if (isMobile()) {
    return (
      <>
        <Button icon transparent onClick={handleNotificationClick}>
          <NotificationIcon style={{ width: '24px' }} />
        </Button>
        <Drawer isOpen={drawerOpen} onClose={handleNotificationClick}>
          <NotificationList className={className} />
        </Drawer>
      </>
    );
  }

  return (
    <Popover trigger={<NotificationIcon />}>
      <NotificationList className={className} />
    </Popover>
  );
});

export { NotificationDropdown };
