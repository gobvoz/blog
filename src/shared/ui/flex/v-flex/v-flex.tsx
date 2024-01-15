import { memo } from 'react';

import { Flex, Props as FlexProps } from '../flex/flex';

type Props = Omit<FlexProps, 'direction'>;

const VFlex = memo((props: Props) => {
  const {
    className,
    children,

    ...rest
  } = props;

  return (
    <Flex className={className} {...rest} direction="column">
      {children}
    </Flex>
  );
});

export { VFlex };
