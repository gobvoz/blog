import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/libs/class-names';

import cls from './app-link.module.scss';

interface Props extends LinkProps {
  className?: string;
}

const AppLink: FC<Props> = props => {
  const { className, to, children, ...otherProps } = props;

  return (
    <Link className={classNames(cls.appLink, className)} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

export { AppLink };
