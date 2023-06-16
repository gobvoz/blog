import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './icon.module.scss';

interface Props {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo((props: Props) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.icon, className)} />;
});

export { Icon };
