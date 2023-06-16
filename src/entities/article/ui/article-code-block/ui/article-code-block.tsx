import { memo, useCallback } from 'react';

import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';
import CopyIcon from 'shared/assets/icons/copy.svg';

import cls from './article-code-block.module.scss';

import { ArticleBlockCode } from '../../../model/types/article';
import { Icon } from 'shared/ui/icon';

interface Props {
  className?: string;
  block: ArticleBlockCode;
}

const ArticleCodeBlock = memo((props: Props) => {
  const { className, block } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(block.content.join('\n'));
  }, [block]);

  return (
    <pre className={classNames(cls.articleCodeBlock, className)}>
      <Button className={cls.copyButton} onClick={handleCopy}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{block.content.join('\n')}</code>
    </pre>
  );
});

export { ArticleCodeBlock };
