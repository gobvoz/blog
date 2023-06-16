import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/article';

const ArticleDetailPage = memo(() => {
  const { id } = useParams();

  return (
    <section>
      <Article id={id || ''} />
    </section>
  );
});

export { ArticleDetailPage };
