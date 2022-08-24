import React, { Children, forwardRef, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import type * as Stitches from '@stitches/react';
import { ResponsiveSpace, styled } from '../../stitches.config';
import { spaceToNegativeSpace } from '../../utils';
import { Box } from '../Box/Box';

const TileBox = styled(Box, {
  variants: {
    columns: {
      1: {
        flex: `0 0 100%`,
      },
      2: {
        flex: `0 0 50%`,
      },
      3: {
        flex: `0 0 33.33%`,
      },
      4: {
        flex: `0 0 25%`,
      },
      5: {
        flex: `0 0 20%`,
      },
      6: {
        flex: `0 0 16.66%`,
      },
      7: {
        flex: `0 0 14.28%`,
      },
      8: {
        flex: `0 0 12.5%`,
      },
      9: {
        flex: `0 0 11.11%`,
      },
    },
  },
});

const Tiles = forwardRef<HTMLDivElement, TilesProps>(
  ({ space, columns = 1, children }, ref) => {
    const negativeSpace = spaceToNegativeSpace(space);

    return (
      <Box marginTop={negativeSpace}>
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
          marginLeft={negativeSpace}
          ref={ref}
        >
          {Children.map(flattenChildren(children), child =>
            child !== null && child !== undefined ? (
              <TileBox columns={columns} paddingLeft={space} paddingTop={space}>
                {child}
              </TileBox>
            ) : null
          )}
        </Box>
      </Box>
    );
  }
);

export type TilesProps = {
  children: ReactNode;
  columns?: Stitches.VariantProps<typeof TileBox>['columns'];
  space?: ResponsiveSpace;
};

Tiles.displayName = 'Tiles';
export { Tiles };
