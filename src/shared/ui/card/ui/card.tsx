import { HTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card = memo((props: Props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.card, className)} {...otherProps}>
      {children}
    </div>
  );
});

export { Card };
