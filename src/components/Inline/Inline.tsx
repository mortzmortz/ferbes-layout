import * as React from 'react';
import { SpaceProps } from 'styled-system';
import flattenChildren from 'react-keyed-flatten-children';
import { useTheme } from '../FerbesProvider/FerbesProvider';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { alignToFlex, alignYToFlex, Align, AlignY } from '../../utils/align';
import { resolveResponsiveProps } from '../../utils/resolveResponsiveProps';
import { mapToNegativeValue } from '../../utils/mapToNegativeValue';

// TODO: split alignItems and justifyContent or handle with display inline-flex?
const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({ space = null, align, alignY, collapseBelow, children }, ref) => {
    const theme = useTheme();
    const negativeSpace = mapToNegativeValue(space);
    const alignFlex = align ? alignToFlex(align) : null;
    const alignYFlex = alignY ? alignYToFlex(alignY) : null;
    const flexDirection = resolveResponsiveProps(
      { below: collapseBelow, breakpoints: theme.breakpoints },
      ['column', 'row']
    );

    return (
      <Box marginTop={negativeSpace}>
        <Flex
          justifyContent={alignFlex}
          flexWrap="wrap"
          marginLeft={negativeSpace}
          alignItems={alignYFlex}
          flexDirection={flexDirection}
          ref={ref}
        >
          {React.Children.map(flattenChildren(children), child =>
            child !== null && child !== undefined ? (
              <Box paddingLeft={space} paddingTop={space}>
                {child}
              </Box>
            ) : null
          )}
        </Flex>
      </Box>
    );
  }
);

export type InlineProps = {
  children?: React.ReactNode;
  align?: Align;
  alignY?: AlignY;
  collapseBelow?: number;
  space?: SpaceProps['padding'];
};

Inline.displayName = 'Inline';
export { Inline };
