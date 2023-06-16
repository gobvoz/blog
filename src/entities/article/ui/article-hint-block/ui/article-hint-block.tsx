import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import { TextBlock } from 'shared/ui/text-block';

import cls from './article-hint-block.module.scss';

import { ArticleBlockHint } from '../../../model/types/article';

interface Props {
  className?: string;
  block: ArticleBlockHint;
}

const ArticleHintBlock = memo((props: Props) => {
  const { className, block } = props;

  return (
    <TextBlock className={classNames(cls.articleHintBlock, className)}>
      {block.content.join('\n')}
    </TextBlock>
  );
});

export { ArticleHintBlock };
