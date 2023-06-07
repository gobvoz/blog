import { lazy } from 'react';

const ArticleDetailPageLazy = lazy(() =>
  import('./article-detail-page').then(module => ({ default: module.ArticleDetailPage })),
);

export { ArticleDetailPageLazy };
