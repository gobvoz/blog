import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-separator-block.module.scss';

import { ArticleBlockSeparator } from '../../../model/types/article';

interface Props {
  className?: string;
  block: ArticleBlockSeparator;
}

const ArticleSeparatorBlock = memo((props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.articleSeparator, className)}>
      <div className={cls.dot} />
      <div className={cls.dot} />
      <div className={cls.dot} />
    </div>
  );
});

export { ArticleSeparatorBlock };
