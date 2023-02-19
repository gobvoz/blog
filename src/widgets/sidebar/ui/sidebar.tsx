import { FC, useState } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './sidebar.module.scss';
import { Button } from 'shared/ui/button';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed(!collapsed);

  const mods = { [cls.collapsed]: collapsed };
  const buttonMods = { [cls.animate]: !collapsed };

  return (
    <div className={classNames([cls.sidebarWrapper, className], mods)}>
      <div className={classNames([cls.sidebar])}>
        <button className={classNames([cls.collapseButton])} onClick={toggleHandler}>
          <span className={classNames([cls.bar], buttonMods)}></span>
        </button>
      </div>
    </div>
  );
};

export { Sidebar };
