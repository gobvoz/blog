import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-list-element.module.scss';

import { Article } from '../../../model/types/article';
import { ArticleListType } from '../../../model/types/article-list-type';

import EyeIcon from 'shared/assets/icons/eye.svg';
import DateIcon from 'shared/assets/icons/date.svg';
import { TextBlock } from 'shared/ui/text-block';
import { Icon } from 'shared/ui/icon';
import { Card } from 'shared/ui/card';

interface Props {
  className?: string;
  article: Article;
  listType: ArticleListType;
}

const ArticleListElement = memo((props: Props) => {
  const { className, article, listType } = props;

  if (listType === ArticleListType.LIST) {
    return (
      <div className={classNames(cls.articleListElement, className, cls[listType])}>
        {article.title}
      </div>
    );
  }

  return (
    <Card className={cls[listType]}>
      <img className={cls.image} src={article.image} alt={article.title} />
      <div className={cls.flex}>
        <div className={cls.date}>
          <Icon className={cls.icon} Svg={DateIcon} small/>
          <TextBlock small>{article.createdAt} </TextBlock>
        </div>
        <div className={cls.views}>
          <TextBlock small>{article.views}</TextBlock>
          <Icon className={cls.icon} Svg={EyeIcon} small/>
        </div>
      </div>
      <TextBlock className={cls.title} small>
        {article.title}
      </TextBlock>
    </Card>
  );
});

export { ArticleListElement };
