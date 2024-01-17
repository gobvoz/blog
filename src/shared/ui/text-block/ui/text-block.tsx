import { FC, ReactNode } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';
import cls from './text-block.module.scss';

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  className?: string;
  header?: string | null;
  headerTag?: HeaderTag;
  paragraph?: string | null;
  children?: ReactNode;

  small?: boolean;
  medium?: boolean;
  large?: boolean;

  form?: boolean;
  errorMessage?: boolean;
}

const TextBlock: FC<Props> = props => {
  const {
    className,
    header,
    headerTag: HeaderTag = 'h2',
    paragraph,
    children,
    form,
    errorMessage,
    small,
    medium,
    large,
  } = props;

  const mod = {
    [cls.form]: form,
    [cls.errorMessage]: errorMessage,
    [cls.small]: small,
    [cls.medium]: medium,
    [cls.large]: large,
  };

  return (
    <div className={classNames(cls.textBlock, className, mod)}>
      {header && <HeaderTag className={cls.header}>{header}</HeaderTag>}
      {paragraph && <p className={cls.paragraph}>{paragraph}</p>}
      {children && <p className={cls.paragraph}>{children}</p>}
    </div>
  );
};

export { TextBlock };
