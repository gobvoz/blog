import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './menu.module.scss';

export enum MenuDirection {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

interface IMenuProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
  vertical?: boolean;
  horizontal?: boolean;
}

const Menu: FC<IMenuProps> = props => {
  const { className, children, vertical, horizontal } = props;

  const mods: Record<string, boolean> = {
    [cls.vertical]: vertical,
    [cls.horizontal]: horizontal,
  };

  if (!Array.isArray(children)) return children;

  return (
    <ul className={classNames([cls.menu, className], mods)}>
      {children
        .filter(child => child)
        .map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className={cls.element}>
            {child}
          </li>
        ))}
    </ul>
  );
};

export { Menu };
