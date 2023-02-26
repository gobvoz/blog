import { FC } from 'react';

import { Spinner } from 'shared/spinner';
import { classNames } from 'shared/libs/class-names';

import cls from './page-loader.module.scss';

interface Props {
  className?: string;
}

const PageLoader: FC<Props> = props => {
  const { className } = props;
  return (
    <div className={classNames(cls.pageLoader, className)}>
      <Spinner />
    </div>
  );
};

export { PageLoader };
