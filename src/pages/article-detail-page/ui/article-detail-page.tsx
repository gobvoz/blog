import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/article';
import { TextBlock } from 'shared/ui/text-block';

import { useAppTranslation } from 'shared/libs/hooks';
import { ArticleCommentList } from 'features/comment-list';
import { NewCommentForm } from 'features/new-comment-form';

const ArticleDetailPage = memo(() => {
  const { id } = useParams();

  const { t } = useAppTranslation('article-detail-page');
  return (
    <section>
      <Article id={id || ''} />
      <TextBlock header={t('comments', { ns: 'article-detail-page' })} />
      <NewCommentForm />
      <ArticleCommentList id={id || ''} />
    </section>
  );
});

export { ArticleDetailPage };
