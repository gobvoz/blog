import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { ArticleTag } from 'shared/constants/ui';

import { TabItem, TabList } from 'shared/ui/tabs';
import { selectArticleListTag } from 'pages/article-page/model/selectors/select-article-list-tag';
import { articleListActions } from 'pages/article-page/model/slice/article-list';

interface Props {
  className?: string;
  onTagChange: () => void;
}

// FIXME: add own state for tab list, remove it from article-list
const ArticleTagList = memo((props: Props) => {
  const { className, onTagChange } = props;

  const dispatch = useAppDispatch();
  const articleTag = useSelector(selectArticleListTag);

  const { t } = useAppTranslation('article-list');

  const handleTagChange = useCallback(
    (tag: ArticleTag) => {
      dispatch(articleListActions.setArticleTag(tag));

      onTagChange();
    },
    [dispatch],
  );

  const tabList = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleTag.ALL,
        content: t('all', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.JS,
        content: t('js', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.JAVA_SCRIPT,
        content: t('java-script', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.ECMASCRIPT,
        content: t('ecmascript', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.FEATURES,
        content: t('features', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.TRICKY_QUESTIONS,
        content: t('tricky-questions', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.INTERVIEW_QUESTIONS,
        content: t('interview-questions', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.WEB_DEVELOPMENT,
        content: t('web-development', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.FOOD,
        content: t('food', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.COOKING,
        content: t('cooking', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.RECIPE,
        content: t('recipe', { ns: 'article-list' }),
      },
      {
        value: ArticleTag.TECHNOLOGY,
        content: t('technology', { ns: 'article-list' }),
      },
    ],
    [],
  );

  return (
    <TabList
      className={className}
      currentTab={articleTag}
      onTabChange={handleTagChange}
      tabList={tabList}
    />
  );
});

export { ArticleTagList };
