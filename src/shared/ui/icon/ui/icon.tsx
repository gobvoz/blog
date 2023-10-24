import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './icon.module.scss';

interface Props {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;

  medium?: boolean;
  small?: boolean;
}

const Icon = memo((props: Props) => {
  const { className, Svg, medium, small } = props;

  const mods = {
    [cls.medium]: medium,
    [cls.small]: small,
  };

  return (
    <div className={classNames(cls.icon, className, mods)}>
      <Svg />
    </div>
  );
});

export { Icon };
