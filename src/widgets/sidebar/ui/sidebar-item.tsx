import { FC } from 'react';

import { AppLink } from 'shared/ui/app-link';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './sidebar-item.module.scss';

import { SidebarItemType } from '../model/item';

interface Props {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem: FC<Props> = props => {
  const { item, collapsed } = props;
  const { t } = useAppTranslation();

  const mods = { [cls.collapsed]: collapsed };

  return (
    <AppLink className={classNames(cls.sidebarMenuLink, mods)} to={item.path}>
      <item.Icon width="24" className={cls.sidebarMenuIcon} />
      {collapsed ? '' : t(item.name)}
    </AppLink>
  );
};

export { SidebarItem };
