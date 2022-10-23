import { FC, ReactNode } from 'react';

import { classNames } from 'shared/lib/class-names/class-names';
import cls from './text-block.module.scss';

export const enum TextBlockMod {
  DEFAULT = 'default',
  FORM = 'form',
  ERROR_MESSAGE = 'error-message',
}

interface ITextBlockProps {
  className?: string;
  header?: string;
  paragraph?: string;
  mod?: TextBlockMod;
  children?: ReactNode;
}

const TextBlock: FC<ITextBlockProps> = props => {
  const {
    className, header, paragraph, mod, children,
  } = props;

  return (
    <div className={classNames([cls.textBlock, className, cls[mod]])}>
      {header && <h2 className={classNames([cls.header])}>{header}</h2>}
      {paragraph && <p className={classNames([cls.paragraph])}>{paragraph}</p>}
      {children && <p className={classNames([cls.paragraph])}>{children}</p>}
    </div>
  );
};

export { TextBlock };
