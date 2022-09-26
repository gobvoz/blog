import { FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button';
import { ButtonMod } from 'shared/ui/button/ui/button';

import cls from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

const Sidebar: FC<ISidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed(!collapsed);

  return (
    <div className={classNames([cls.sidebar, className], { [cls.collapsed]: collapsed })}>
      <Button
        className={classNames([cls.collapseButton])}
        mod={ButtonMod.TRANSPARENT}
        onClick={toggleHandler}>
        <span className={classNames([cls.bar], { [cls.animate]: !collapsed })} />
      </Button>
    </div>
  );
};

export { Sidebar };
