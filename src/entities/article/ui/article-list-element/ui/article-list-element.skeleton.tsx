import { memo } from 'react';

import cls from './article-list-element.module.scss';

import { ArticleListType } from '../../../model/types/article-list-type';

import { Card } from 'shared/ui/card';
import { classNames } from 'shared/libs/class-names';
import { Skeleton } from 'shared/ui/skeleton';

interface Props {
  className?: string;
  listType: ArticleListType;
}

const ArticleListElementSkeleton = memo((props: Props) => {
  const { className, listType } = props;

  if (listType === ArticleListType.LIST) {
    return (
      <Card className={classNames(cls[listType], className)} type={listType}>
        <div className={cls.header}>
          <div className={cls.flex}>
            <Skeleton className={cls.skeletonAvatar} />
            <Skeleton className={cls.skeletonAuthor} />
          </div>
          <div className={cls.flex}>
            <div className={cls.date}>
              <Skeleton className={cls.skeletonDate} />
            </div>
          </div>
        </div>
        <Skeleton className={cls.skeletonTitle} />
        <div className={cls.main}>
          <Skeleton className={cls.image} />
          <div className={cls.description}>
            <Skeleton className={cls.skeletonRow} width="100%" />
            <Skeleton className={cls.skeletonRow} width="90%" />
            <Skeleton className={cls.skeletonRow} width="95%" />
            <Skeleton className={cls.skeletonRow} width="30%" />
          </div>
        </div>
        <Skeleton className={cls.skeletonTitle} />
        <div className={cls.footer}>
          <Skeleton width={100} height={20} radius={9} />
          <div className={cls.views}>
            <Skeleton className={cls.skeletonViews} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls[listType], className)} type={listType}>
      <Skeleton className={cls.skeletonImage} />
      <div className={cls.flex}>
        <div className={cls.date}>
          <Skeleton className={cls.skeletonDate} />
        </div>
        <div className={cls.views}>
          <Skeleton className={cls.skeletonViews} />
        </div>
      </div>
      <Skeleton className={cls.skeletonRow} width="95%" />
      <Skeleton className={cls.skeletonRow} width="40%" />
    </Card>
  );
});

export { ArticleListElementSkeleton };
