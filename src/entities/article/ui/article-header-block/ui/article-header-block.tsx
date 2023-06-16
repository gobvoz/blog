import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-header-block.module.scss';

import { ArticleBlockHeader } from '../../../model/types/article';

interface Props {
  className?: string;
  block: ArticleBlockHeader;
}

const ArticleHeaderBlock = memo((props: Props) => {
  const { className, block } = props;

  return (
    <h1 className={classNames(cls.articleHeaderBlock, className)}>{block.content.join('\n')}</h1>
  );
});

export { ArticleHeaderBlock };
