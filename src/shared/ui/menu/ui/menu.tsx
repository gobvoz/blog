import { FC } from 'react';
import { classNames } from 'shared/libs/class-names';

import cls from './menu.module.scss';

interface IMenuProps {
  className?: string;
  children: JSX.Element[];

  vertical?: boolean;
}

const Menu: FC<IMenuProps> = props => {
  const { className, children, vertical } = props;

  const mods: Record<string, boolean> = {
    [cls.vertical]: vertical,
    [cls.horizontal]: !vertical,
  };

  return (
    <ul className={classNames([cls.menu, className], mods)}>
      {children.map((child, index) => (
        <li key={index} className={cls.element}>
          {child}
        </li>
      ))}
    </ul>
  );
};

export { Menu };
