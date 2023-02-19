import { FC } from 'react';

import { useCollapse } from 'app/providers/collapse-provider';

import { classNames } from 'shared/libs/class-names';

import cls from './sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = props => {
  const { className } = props;
  const { collapsed, toggleCollapse } = useCollapse();

  const mods = { [cls.collapsed]: collapsed };
  const buttonMods = { [cls.animate]: !collapsed };

  return (
    <div className={classNames(cls.sidebarWrapper, className, mods)}>
      <div className={cls.sidebar}>
        <button className={cls.collapseButton} onClick={toggleCollapse}>
          <span className={classNames(cls.bar, buttonMods)}></span>
        </button>
      </div>
    </div>
  );
};

export { Sidebar };
