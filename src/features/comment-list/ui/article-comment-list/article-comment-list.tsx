import { memo } from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from 'entities/comment';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';

import { commentListReducer, getArticleCommentList } from '../../model/slice/comment-list-slice';
import { fetchCommentListByArticleId } from '../../model/services/fetch-comment-by-article-id';
import { selectCommentListLoading } from '../../model/selectors/select-comment-list-loading';
import { selectCommentListError } from '../../model/selectors/select-comment-list-error';

import { useAppDispatch } from 'shared/libs/hooks';
import { useInitialEffect } from 'shared/libs/hooks';

interface Props {
  className?: string;
  id: string;
}

const reducerList: ReducerList = {
  commentList: commentListReducer,
};

const ArticleCommentList = memo((props: Props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  useInitialEffect(() => dispatch(fetchCommentListByArticleId(id)));

  const commentList = useSelector(getArticleCommentList.selectAll);
  const isLoading = useSelector(selectCommentListLoading);
  const error = useSelector(selectCommentListError);

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <CommentList
        className={className}
        commentList={commentList}
        isLoading={isLoading}
        error={error}
      />
    </DynamicModuleLoader>
  );
});

export { ArticleCommentList };
