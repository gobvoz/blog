import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useCollapse } from 'app/providers/collapse-provider';

import { LanguageToggler } from 'widgets/language-toggler';

import { Menu } from 'shared/ui/menu';
import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';

import cls from './sidebar.module.scss';
import { sidebarItemList } from '../model/item';
import { SidebarItem } from './sidebar-item';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = memo((props: Props) => {
  const { className } = props;
  const { collapsed, toggleCollapse } = useCollapse();

  const { t } = useTranslation();

  const mods = { [cls.collapsed]: collapsed };
  const buttonMods = { [cls.animate]: !collapsed };

  const menuItemList = useMemo(
    () =>
      sidebarItemList.map((item, index) => (
        <SidebarItem key={index} item={item} collapsed={collapsed} />
      )),
    [collapsed],
  );

  return (
    <div className={classNames(cls.sidebarWrapper, className, mods)} data-testid="sidebar">
      <div className={cls.sidebar}>
        <Button
          className={classNames(cls.collapseButton)}
          primary
          data-testid="sidebar-toggle"
          onClick={toggleCollapse}>
          <span className={classNames([cls.bar], buttonMods)} />
        </Button>
        <Menu className={cls.sidebarMenu} vertical>
          {menuItemList}
        </Menu>
        <LanguageToggler />
      </div>
    </div>
  );
});

export { Sidebar };
