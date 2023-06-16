import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-image-block.module.scss';

import { ArticleBlockImage } from '../../../model/types/article';

interface Props {
  className?: string;
  block: ArticleBlockImage;
}

const ArticleImageBlock = memo((props: Props) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleImageBlock, className)}>
      {block.content.map((item, index) => (
        <img key={index} src={item} />
      ))}
    </div>
  );
});

export { ArticleImageBlock };
