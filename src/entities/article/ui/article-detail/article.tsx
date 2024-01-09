import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs/class-names';
import { DynamicModuleLoader } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import DateIcon from 'shared/assets/icons/date.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { TextBlock } from 'shared/ui/text-block';
import { Skeleton } from 'shared/ui/skeleton';
import { Avatar } from 'shared/ui/avatar';
import { Icon } from 'shared/ui/icon';

import cls from './article.module.scss';

import { articleReducer } from '../../model/slice/article-slice';
import { fetchArticleData } from '../../model/services/fetch-article-data';
import { selectArticleLoading } from '../../model/selectors/select-article-loading';
import { selectArticleData } from '../../model/selectors/select-article-data';
import { selectArticleError } from '../../model/selectors/select-article-error';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleParagraphBlock } from '../article-paragraph-block';
import { ArticleHeaderBlock } from '../article-header-block';
import { ArticleCodeBlock } from '../article-code-block';
import { ArticleSeparatorBlock } from '../article-separator-block';
import { ArticleImageBlock } from '../article-image-block';
import { ArticleHintBlock } from '../article-hint-block';
import { useInitialEffect } from 'shared/libs/hooks';
import { AppRoutes } from 'shared/constants/app-routes';
import { AppLink } from 'shared/ui/app-link';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/button';
import { ArticleList } from '../article-list';
import { ListType } from 'features/list-type-switcher';
import {
  articleRecommendationListReducer,
  selectArticleRecommendationList,
} from '../../model/slice/article-recommendation-list';
import { selectArticleRecommendationListLoading } from '../../model/selectors/select-article-recommendation-list-loading';
import { selectArticleRecommendationListError } from '../../model/selectors/select-article-recommendation-list-error';
import { fetchArticleRecommendationList } from '../../model/services/fetch-article-recommendation-list';

interface Props {
  className?: string;
  id: string;
}

const reducerList = {
  article: articleReducer,
  articleRecommendationList: articleRecommendationListReducer,
};

const Article = memo((props: Props) => {
  const { className, id } = props;

  const { t } = useAppTranslation('article-detail-page');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchArticleData(id));
    dispatch(fetchArticleRecommendationList());
  }, [dispatch, id]);

  const isLoading = useSelector(selectArticleLoading);
  const data = useSelector(selectArticleData);
  const error = useSelector(selectArticleError);

  const recommendationLoading = useSelector(selectArticleRecommendationListLoading);
  const recommendationError = useSelector(selectArticleRecommendationListError);
  const recommendationList = useSelector(selectArticleRecommendationList.selectAll);

  let content = null;

  const handleBack = useCallback(() => {
    navigate(AppRoutes.ARTICLES);
  }, [navigate]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.PARAGRAPH:
        return <ArticleParagraphBlock key={block.id} block={block} />;
      case ArticleBlockType.HEADER:
        return <ArticleHeaderBlock key={block.id} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />;
      case ArticleBlockType.SEPARATOR:
        return <ArticleSeparatorBlock key={block.id} block={block} />;
      case ArticleBlockType.HINT:
        return <ArticleHintBlock key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.skeletonTitle} />
        <div className={cls.skeletonDescription}>
          <Skeleton className={cls.skeletonAvatar} />
          <div className={cls.skeletonGroup}>
            <Skeleton className={cls.skeletonName} />
            <Skeleton className={cls.skeletonName} />
          </div>
        </div>
        <Skeleton className={cls.skeletonArea} />
        <Skeleton className={cls.skeletonArea} />
      </>
    );
  } else if (error) {
    content = (
      <>
        <Button className={cls.backButton} onClick={handleBack} appLink>
          {t('back', { ns: 'article-detail-page' })}
        </Button>
        <h1>{t('error-not-found', { ns: 'article-detail-page' })}</h1>
        <TextBlock>{t('error-not-found-long', { ns: 'article-detail-page' })}</TextBlock>
      </>
    );
  } else if (data) {
    content = (
      <>
        <Button className={cls.backButton} onClick={handleBack} appLink>
          {t('back', { ns: 'article-detail-page' })}
        </Button>
        <TextBlock header={data.title}>{data.subtitle}</TextBlock>
        <div className={cls.skeletonDescription}>
          <AppLink to={AppRoutes.PROFILE + '/' + data.profile.id} withoutPadding>
            <Avatar className={cls.skeletonAvatar} src={data.profile.avatar} />
          </AppLink>
          <div className={cls.skeletonGroup}>
            <AppLink to={AppRoutes.PROFILE + '/' + data.profile.id} withoutPadding>
              <TextBlock header={data.profile.first + ' ' + data.profile.last} />
            </AppLink>
            <TextBlock>{data.profile.about}</TextBlock>
          </div>
        </div>
        <div className={cls.iconText}>
          <Icon Svg={EyeIcon} />
          <span>17</span>
        </div>
        <div className={cls.iconText}>
          <Icon Svg={DateIcon} />
          {data.createdAt}
        </div>
        <div className={cls.content}>{data.body.map(renderBlock)}</div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <section className={classNames(cls.article, className)}>{content}</section>
      <TextBlock header={t('recommendations', { ns: 'article-detail-page' })} />
      <ArticleList
        className={cls.recommendationList}
        articleList={recommendationList}
        listType={ListType.GRID}
        target="_blank"
        isLoading={recommendationLoading}
      />
    </DynamicModuleLoader>
  );
});

export { Article };
