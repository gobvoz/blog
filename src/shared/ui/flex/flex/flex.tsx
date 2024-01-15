import { FC, ReactNode, memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const justifyMap: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
  around: cls.justifyAround,
};

const alignMap: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
  baseline: cls.alignBaseline,
  stretch: cls.alignStretch,
};

const directionMap: Record<FlexDirection, string> = {
  row: cls.directionRow,
  'row-reverse': cls.directionRowReverse,
  column: cls.directionColumn,
  'column-reverse': cls.directionColumnReverse,
};

const wrapMap: Record<FlexWrap, string> = {
  nowrap: cls.wrapNowrap,
  wrap: cls.wrapWrap,
  'wrap-reverse': cls.wrapWrapReverse,
};

const gapMap: Record<FlexGap, string> = {
  none: cls.gapNone,
  xs: cls.gapXs,
  s: cls.gapS,
  m: cls.gapM,
  l: cls.gapL,
  xl: cls.gapXl,
  xxl: cls.gapXxl,
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;

  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: FlexWrap;

  gap?: FlexGap;
}

const Flex = memo((props: Props) => {
  const {
    className,
    children,

    justify = 'start',
    align = 'start',
    direction = 'row',
    wrap = 'wrap',

    gap = 'none',

    ...rest
  } = props;

  const classes = [
    className,
    justifyMap[justify],
    alignMap[align],
    directionMap[direction],
    wrapMap[wrap],
    gapMap[gap],
  ];

  return (
    <div className={classNames(cls.flex, classes)} {...rest}>
      {children}
    </div>
  );
});

export { Flex };
