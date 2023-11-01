import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Article } from 'entities/article';
import { TextBlock } from 'shared/ui/text-block';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { ArticleCommentList } from 'features/comment-list';
import { NewCommentForm } from 'features/new-comment-form';
import { addCommentForArticle } from '../model/services/add-comment-for-article';
import { fetchCommentListByArticleId } from 'features/comment-list/model/services/fetch-comment-by-article-id';

import cls from './article-detail-page.module.scss';

const ArticleDetailPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <div className={cls.wrapper}>
      <Article id={id || ''} />
      <TextBlock header={t('comments', { ns: 'article-detail-page' })} />
      <NewCommentForm onSendComment={onSendComment} />
      <ArticleCommentList id={id || ''} />
    </div>
  );
});

export { ArticleDetailPage };
