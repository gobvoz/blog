import { Children, DOMAttributes, FC } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './page-content.module.scss';

interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}

const PageContent: FC<Props> = props => {
  const { className, children } = props;

  return <section className={classNames(cls.pageContent, className)}>{children}</section>;
};

export { PageContent };
