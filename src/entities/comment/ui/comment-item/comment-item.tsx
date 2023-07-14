import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './comment-item.module.scss';
import { Comment } from 'entities/comment/model/types/comment';
import { Avatar } from 'shared/ui/avatar';
import { TextBlock } from 'shared/ui/text-block';
import { Skeleton } from 'shared/ui/skeleton';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';

interface Props {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

const CommentItem = memo((props: Props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentItem, className)}>
        <div className={cls.header}>
          <Skeleton className={cls.skeletonAvatar} radius="50%" />
          <Skeleton className={cls.skeletonName} />
        </div>
        <Skeleton className={cls.skeletonText1} />
        <Skeleton className={cls.skeletonText2} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentItem, className)}>
      <div className={cls.header}>
        <AppLink to={AppRoutes.PROFILE + '/' + comment.profile.id} withoutPadding>
          <Avatar src={comment.profile.avatar} small />
        </AppLink>
        <AppLink to={AppRoutes.PROFILE + '/' + comment.profile.id} withoutPadding>
          <TextBlock header={comment.profile.first + ' ' + comment.profile.last} />
        </AppLink>
      </div>
      <TextBlock>{comment.body}</TextBlock>
      <TextBlock className={cls.created} small>
        {comment.createdAt}
      </TextBlock>
    </div>
  );
});

export { CommentItem };
