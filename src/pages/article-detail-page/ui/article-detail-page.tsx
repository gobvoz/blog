import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/article';
import { TextBlock } from 'shared/ui/text-block';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { ArticleCommentList } from 'features/comment-list';
import { NewCommentForm } from 'features/new-comment-form';
import { addCommentForArticle } from '../model/services/add-comment-for-article';
import { fetchCommentListByArticleId } from 'features/comment-list/model/services/fetch-comment-by-article-id';
import { PageWrapper } from 'widgets/page-wrapper';
import { ArticleHeader } from 'entities/article/ui/article-header';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';
import { selectArticleData } from 'entities/article/model/selectors/select-article-data';
import { selectCanEditArticle } from '../model/selectors/select-can-edit-article';

const ArticleDetailPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  
  const onSendComment = useCallback(
    (text: string) => {
      if (!id) return;

      dispatch(addCommentForArticle({ id, text }));
      dispatch(fetchCommentListByArticleId(id || ''));
    },
    [dispatch],
  );

  const { t } = useAppTranslation('article-detail-page');
  return (
    <PageWrapper>
      <ArticleHeader />
      <Article id={id || ''} />
      <TextBlock header={t('comments', { ns: 'article-detail-page' })} />
      <NewCommentForm onSendComment={onSendComment} />
      <ArticleCommentList id={id || ''} />
    </PageWrapper>
  );
});

export { ArticleDetailPage };
