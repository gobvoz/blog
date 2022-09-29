import { FC } from 'react';

import { Spinner } from 'shared/ui/spinner';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './page-loader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

const PageLoader: FC<IPageLoaderProps> = props => {
  const { className } = props;
  return (
    <div className={classNames([cls.pageLoader, className])}>
      <Spinner />
    </div>
  );
};

export { PageLoader };
