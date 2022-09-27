import React, { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { spaceToNegativeSpace } from '../../utils';
import type { ResponsiveSpace } from '../../stitches.config';

const Bleed = forwardRef<HTMLDivElement, BleedProps>(
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
      ...props
    },
    forwardedRef
  ) => {
    const mt = spaceToNegativeSpace(top || vertical || space);
    const mb = spaceToNegativeSpace(bottom || vertical || space);
    const ml = spaceToNegativeSpace(left || horizontal || space);
    const mr = spaceToNegativeSpace(right || horizontal || space);

    return (
      <Box
        {...props}
        ref={forwardedRef}
        as={as}
        display={as === 'span' ? 'block' : undefined}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
      >
        <Box
          display={as === 'span' ? 'block' : undefined}
          css={{
            position: 'relative',
          }}
        >
          {children}
        </Box>
      </Box>
    );
  }
);

export type BleedProps = React.ComponentPropsWithRef<'div'> & {
  as?: 'div' | 'span';
  children?: React.ReactNode;
  space?: ResponsiveSpace;
  horizontal?: ResponsiveSpace;
  vertical?: ResponsiveSpace;
  top?: ResponsiveSpace;
  bottom?: ResponsiveSpace;
  left?: ResponsiveSpace;
  right?: ResponsiveSpace;
};

Bleed.displayName = 'Bleed';
export { Bleed };
