import * as React from 'react';
import { Box } from '../Box/Box';
import { mapToNegativeValue } from '../../utils/mapToNegativeValue';
import { SpaceProps } from 'styled-system';
import { BoxProps } from '../../utils/box-props';

const Bleed = React.forwardRef<HTMLDivElement, BleedProps>(
  (
    {
      space,
      horizontal,
      vertical,
      top,
      bottom,
      left,
      right,
      as = 'div',
      children,
    },
    ref
  ) => {
    const mt = mapToNegativeValue(top || vertical || space);
    const mb = mapToNegativeValue(bottom || vertical || space);
    const ml = mapToNegativeValue(left || horizontal || space);
    const mr = mapToNegativeValue(right || horizontal || space);

    return (
      <Box
        as={as}
        display={as === 'span' ? 'block' : undefined}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
      >
        <Box display={as === 'span' ? 'block' : undefined} position="relative">
          {children}
        </Box>
      </Box>
    );
  }
);

export type BleedProps = {
  as?: 'span' | 'div';
  children?: BoxProps['children'];
  space?: SpaceProps['margin'];
  horizontal?: SpaceProps['margin'];
  vertical?: SpaceProps['margin'];
  top?: SpaceProps['margin'];
  bottom?: SpaceProps['margin'];
  left?: SpaceProps['margin'];
  right?: SpaceProps['margin'];
};

Bleed.displayName = 'Bleed';
export { Bleed };
