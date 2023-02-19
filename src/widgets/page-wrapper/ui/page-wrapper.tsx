import { DOMAttributes, FC } from 'react';

import { useCollapse } from 'app/providers/collapse-provider';

import { classNames } from 'shared/libs/class-names';

import cls from './page-wrapper.module.scss';

interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}

const PageWrapper: FC<Props> = props => {
  const { children, className } = props;
  const { collapsed } = useCollapse();

  const mods = { [cls.sidebarCollapsed]: collapsed };

  return <div className={classNames(cls.pageWrapper, className, mods)}>{children}</div>;
};

export { PageWrapper };
