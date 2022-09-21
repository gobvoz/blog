import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';

import cls from './horizontal-menu.module.scss';

interface IHorizontalMenuProps {
  className?: string;
  children: JSX.Element[];
}

const HorizontalMenu: FC<IHorizontalMenuProps> = props => {
  const { className, children } = props;

  return (
    <ul className={classNames([cls.horizontalMenu, className])}>
      {children.map((child, index) => (
        <li key={index} className={cls.element}>
          {child}
        </li>
      ))}
    </ul>
  );
};

export { HorizontalMenu };
