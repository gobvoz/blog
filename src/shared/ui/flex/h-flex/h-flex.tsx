import { memo } from 'react';

import { Flex, Props as FlexProps } from '../flex/flex';

type Props = Omit<FlexProps, 'direction'>;

const HFlex = memo((props: Props) => {
  const {
    className,
    children,

    ...rest
  } = props;

  return (
    <Flex className={className} {...rest} direction="row">
      {children}
    </Flex>
  );
});

export { HFlex };
