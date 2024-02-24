import { HTMLAttributeAnchorTarget, memo } from 'react';

import { ListType } from 'features/list-type-switcher';

import EyeIcon from 'shared/assets/icons/eye.svg';
import DateIcon from 'shared/assets/icons/date.svg';
import { TextBlock } from 'shared/ui/text-block';
import { Icon } from 'shared/ui/icon';
import { Card } from 'shared/ui/card';
import { useHover } from 'shared/libs/hooks/use-hover';
import { Avatar } from 'shared/ui/avatar';
import { classNames } from 'shared/libs/class-names';
import { ArticleParagraphBlock } from '../../article-paragraph-block';
import { AppRoutes } from 'shared/constants/app-routes';
import { AppLink } from 'shared/ui/app-link';

import { Article, ArticleBlockParagraph } from '../../../model/types/article';
import { ArticleBlockType } from '../../../model/const/const';

import cls from './article-list-element.module.scss';

interface Props {
  className?: string;
  article: Article;
  listType: ListType;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListElement = memo((props: Props) => {
  const { className, article, listType, target = '' } = props;
  const [_, bindHover] = useHover();

  if (listType === ListType.LIST) {
    const textBlock = article.body.find(
      block => block.type === ArticleBlockType.PARAGRAPH,
    ) as ArticleBlockParagraph;

    return (
      <Card className={classNames(cls[listType], className)} type={listType} {...bindHover}>
        <div className={cls.header}>
          <div className={cls.flex}>
            <Avatar src={article.profile.avatar} medium />
            <TextBlock className={cls.author}>
              {article.profile.first} {article.profile.last}
            </TextBlock>
          </div>
          <div className={cls.flex}>
            <div className={cls.date}>
              <Icon className={cls.icon} Svg={DateIcon} small />
              <TextBlock small>{article.createdAt} </TextBlock>
            </div>
          </div>
        </div>
        <TextBlock className={cls.title} header={article.title} />
        <div className={cls.main}>
          <img className={cls.image} src={article.image} alt={article.title} />
          <div className={cls.description}>
            {textBlock && <ArticleParagraphBlock block={textBlock} small />}
          </div>
        </div>
        <TextBlock className={cls.title} small>
          {article.topics.join(', ')}
        </TextBlock>
        <div className={cls.footer}>
          <AppLink to={`${AppRoutes.ARTICLES}/${article.id}`}>Read...</AppLink>
          <div className={cls.views}>
            <TextBlock small>{article.views}</TextBlock>
            <Icon className={cls.icon} Svg={EyeIcon} small />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <AppLink
      className={cls.linkCard}
      to={`${AppRoutes.ARTICLES}/${article.id}`}
      target={target}
      withoutPadding>
      <Card className={classNames(cls[listType], className)} type={listType} {...bindHover}>
        <img className={cls.image} src={article.image} alt={article.title} />
        <div className={cls.flex}>
          <div className={cls.date}>
            <Icon className={cls.icon} Svg={DateIcon} small />
            <TextBlock small>{article.createdAt} </TextBlock>
          </div>
          <div className={cls.views}>
            <TextBlock small>{article.views}</TextBlock>
            <Icon className={cls.icon} Svg={EyeIcon} small />
          </div>
        </div>
        <TextBlock className={cls.title} small>
          {article.title}
        </TextBlock>
      </Card>
    </AppLink>
  );
});

export { ArticleListElement };
