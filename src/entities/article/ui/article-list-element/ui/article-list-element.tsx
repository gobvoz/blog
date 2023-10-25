import { memo } from 'react';

import cls from './article-list-element.module.scss';

import { Article, ArticleBlockType } from '../../../model/types/article';
import { ArticleListType } from '../../../model/types/article-list-type';

import EyeIcon from 'shared/assets/icons/eye.svg';
import DateIcon from 'shared/assets/icons/date.svg';
import { TextBlock } from 'shared/ui/text-block';
import { Icon } from 'shared/ui/icon';
import { Card } from 'shared/ui/card';
import { useHover } from 'shared/libs/hooks/useHover';
import { Avatar } from 'shared/ui/avatar';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';

interface Props {
  className?: string;
  article: Article;
  listType: ArticleListType;
}

const ArticleListElement = memo((props: Props) => {
  const { className, article, listType } = props;
  const [isHovered, bindHover] = useHover();

  if (listType === ArticleListType.LIST) {
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
            {article.body
              .filter(block => block.type === ArticleBlockType.PARAGRAPH)[0]
              .content.map((paragraph, index) => (
                <TextBlock key={index} className={cls.title} small>
                  {paragraph}
                </TextBlock>
              ))}
          </div>
        </div>
        <TextBlock className={cls.title} small>
          {article.topics.join(', ')}
        </TextBlock>
        <div className={cls.footer}>
          <Button>Read...</Button>
          <div className={cls.views}>
            <TextBlock small>{article.views}</TextBlock>
            <Icon className={cls.icon} Svg={EyeIcon} small />
          </div>
        </div>
      </Card>
    );
  }

  return (
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
  );
});

export { ArticleListElement };
