import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-paragraph-block.module.scss';

import { ArticleBlockParagraph } from '../../../model/types/article';
import { TextBlock } from 'shared/ui/text-block';

interface Props {
  className?: string;
  block: ArticleBlockParagraph;

  small?: boolean;
}

const ArticleParagraphBlock = memo((props: Props) => {
  const { className, block, small } = props;

  return (
    <>
      {block.content.map((item, index) => (
        <TextBlock
          key={index}
          className={classNames(cls.articleParagraphBlock, className)}
          small={small}>
          {item}
        </TextBlock>
      ))}
    </>
  );
});

export { ArticleParagraphBlock };
