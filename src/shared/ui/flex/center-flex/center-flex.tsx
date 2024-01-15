import { memo } from 'react';

import { Flex, Props as FlexProps } from '../flex/flex';

type Props = Omit<FlexProps, 'direction, justify, align'>;

const CenterFlex = memo((props: Props) => {
  const {
    className,
    children,

    ...rest
  } = props;

  return (
    <Flex className={className} {...rest} direction="column" justify="center" align="center">
      {children}
    </Flex>
  );
});

export { CenterFlex };
