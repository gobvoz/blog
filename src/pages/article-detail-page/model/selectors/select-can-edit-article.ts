import { createSelector } from '@reduxjs/toolkit';
import { selectArticleData } from 'entities/article/model/selectors/select-article-data';
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

export const selectCanEditArticle = createSelector(
  selectArticleData,
  selectUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.profile.id === user.id;
  },
);
