import { FC, ReactNode, memo } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';
import cls from './text-block.module.scss';

interface Props {
  className?: string;
  header?: string;
  paragraph?: string;
  children?: ReactNode;

  form?: boolean;
  errorMessage?: boolean;
}

const TextBlock: FC<Props> = props => {
  const { className, header, paragraph, children, form, errorMessage } = props;

  const mod = {
    [cls.form]: form,
    [cls.errorMessage]: errorMessage,
  };

  return (
    <div className={classNames(cls.textBlock, className, mod)}>
      {header && <h2 className={classNames([cls.header])}>{header}</h2>}
      {paragraph && <p className={classNames([cls.paragraph])}>{paragraph}</p>}
      {children && <p className={classNames([cls.paragraph])}>{children}</p>}
    </div>
  );
};

export { TextBlock };
