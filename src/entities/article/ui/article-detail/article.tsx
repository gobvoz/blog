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
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';
import { useInitialEffect } from 'shared/libs/hooks';
import { HFlex, VFlex } from 'shared/ui/flex';

import cls from './article.module.scss';

import { articleReducer } from '../../model/slice/article-slice';
import { fetchArticleData } from '../../model/services/fetch-article-data';
import { selectArticleLoading } from '../../model/selectors/select-article-loading';
import { selectArticleData } from '../../model/selectors/select-article-data';
import { selectArticleError } from '../../model/selectors/select-article-error';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/const/const';
import { ArticleParagraphBlock } from '../article-paragraph-block';
import { ArticleHeaderBlock } from '../article-header-block';
import { ArticleCodeBlock } from '../article-code-block';
import { ArticleSeparatorBlock } from '../article-separator-block';
import { ArticleImageBlock } from '../article-image-block';
import { ArticleHintBlock } from '../article-hint-block';

interface Props {
  className?: string;
  id: string;
}

const reducerList = {
  article: articleReducer,
};

const Article = memo((props: Props) => {
  const { className, id } = props;

  const { t } = useAppTranslation('article-detail-page');
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleData(id));
  }, [dispatch, id]);

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
        <HFlex className={cls.skeletonDescription} gap="xxl">
          <Skeleton className={cls.skeletonAvatar} />
          <VFlex className={cls.skeletonGroup} justify="center" gap="xl">
            <Skeleton className={cls.skeletonName} />
            <Skeleton className={cls.skeletonName} />
          </VFlex>
        </HFlex>
        <Skeleton className={cls.skeletonArea} />
        <Skeleton className={cls.skeletonArea} />
      </>
    );
  } else if (error) {
    content = (
      <>
        <h1>{t('error-not-found', { ns: 'article-detail-page' })}</h1>
        <TextBlock>{t('error-not-found-long', { ns: 'article-detail-page' })}</TextBlock>
      </>
    );
  } else if (data) {
    content = (
      <>
        <TextBlock header={data.title}>{data.subtitle}</TextBlock>
        <HFlex className={cls.skeletonDescription} gap="xxl">
          <AppLink to={AppRoutes.PROFILE + '/' + data.profile.id} withoutPadding>
            <Avatar className={cls.skeletonAvatar} src={data.profile.avatar} />
          </AppLink>
          <VFlex className={cls.skeletonGroup} justify="center" gap="xl">
            <AppLink to={AppRoutes.PROFILE + '/' + data.profile.id} withoutPadding>
              <TextBlock header={data.profile.first + ' ' + data.profile.last} />
            </AppLink>
            <TextBlock>{data.profile.about}</TextBlock>
          </VFlex>
        </HFlex>
        <HFlex className={cls.iconText} gap="m">
          <Icon Svg={EyeIcon} />
          <span>17</span>
        </HFlex>
        <HFlex className={cls.iconText} gap="m">
          <Icon Svg={DateIcon} />
          {data.createdAt}
        </HFlex>
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
