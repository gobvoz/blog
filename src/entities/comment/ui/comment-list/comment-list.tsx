import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './comment-list.module.scss';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../comment-item/comment-item';
import { TextBlock } from 'shared/ui/text-block';
import { useAppTranslation } from 'shared/libs/hooks';

interface Props {
  className?: string;
  commentList: Comment[];
  isLoading?: boolean;
  error?: string;
}

const CommentList = memo((props: Props) => {
  const { className, commentList, isLoading, error } = props;
  const { t } = useAppTranslation('comment-list');

  return (
    <div className={classNames(cls.commentList, className)}>
      {commentList?.length ? (
        commentList?.map(comment => (
          <CommentItem key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <TextBlock>{t('no-comments', { ns: 'comment-list' })}</TextBlock>
      )}
    </div>
  );
});

export { CommentList };
