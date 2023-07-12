import { memo, useCallback, useEffect } from 'react';
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

import { articleReducer } from '../model/slice/article-slice';
import { fetchArticleData } from '../model/services/fetch-article-data';
import { selectArticleLoading } from '../model/selectors/select-article-loading';
import { selectArticleData } from '../model/selectors/select-article-data';
import { selectArticleError } from '../model/selectors/select-article-error';
import { ArticleBlock, ArticleBlockType } from '../model/types/article';
import { ArticleParagraphBlock } from './article-paragraph-block';
import { ArticleHeaderBlock } from './article-header-block';
import { ArticleCodeBlock } from './article-code-block';
import { ArticleSeparatorBlock } from './article-separator-block';
import { ArticleImageBlock } from './article-image-block';
import { ArticleHintBlock } from './article-hint-block';
import { useInitialEffect } from 'shared/libs/hooks';
import { AppRoutes } from 'shared/constants/app-routes';
import { AppLink } from 'shared/ui/app-link';

interface Props {
  className?: string;
  id: string;
}

const reducerList = {
  article: articleReducer,
};

const Article = memo((props: Props) => {
  const { className, id } = props;

  const { t } = useAppTranslation('article-page');
  const dispatch = useAppDispatch();

  useInitialEffect(() => dispatch(fetchArticleData(id)));

  const isLoading = useSelector(selectArticleLoading);
  const data = useSelector(selectArticleData);
  const error = useSelector(selectArticleError);

  let content = null;

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
        <h1>{t('error-not-found', { ns: 'article-page' })}</h1>
        <TextBlock>{t('error-not-found-long', { ns: 'article-page' })}</TextBlock>
      </>
    );
  } else if (data) {
    content = (
      <>
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
    </DynamicModuleLoader>
  );
});

export { Article };