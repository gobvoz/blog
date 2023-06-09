import { CSSProperties, FC, memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './skeleton.module.scss';

interface Props {
  className?: string;
  height?: number | string;
  width?: number | string;
  border?: string;
  radius?: string;
}

const Skeleton = memo((props: Props) => {
  const { className, height, width, border, radius } = props;

  const styles: CSSProperties = {
    height,
    width,
    border,
    borderRadius: radius,
  };

  return <div className={classNames(cls.skeleton, className)} style={styles} />;
});

export { Skeleton };
