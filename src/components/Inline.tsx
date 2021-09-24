import * as React from 'react';
import { get, SpaceProps } from 'styled-system';
import styled from '@emotion/styled';
import { useTheme } from './FerbesProvider';
import { Box } from './Box';
import { Flex } from './Flex';
import { alignToFlex, alignYToFlex } from '../utils/align';
import { resolveResponsiveProps } from '../utils/resolveResponsiveProps';

// TODO: split alignItems and justifyContent or handle with display inline-flex ?
const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({ space = null, align, alignY, collapseBelow, children }, ref) => {
    const theme = useTheme();
    const negativeSpace = !space ? 0 : -Number(space);
    const marginTop = get(theme.space, Number(space));
    const alignFlex = align ? alignToFlex(align) : null;
    const alignYFlex = alignY ? alignYToFlex(alignY) : null;
    const flexDirection = resolveResponsiveProps(
      { below: collapseBelow, breakpoints: theme.breakpoints },
      ['column', 'row']
    );

    return (
      <NegativeMarginTop pseudoMarginTop={marginTop}>
        <Flex
          justifyContent={alignFlex}
          flexWrap="wrap"
          marginLeft={negativeSpace}
          alignItems={alignYFlex}
          flexDirection={flexDirection}
          ref={ref}
        >
          {React.Children.map(children, child =>
            child !== null && child !== undefined ? (
              <Box paddingLeft={space} paddingTop={space}>
                {child}
              </Box>
            ) : null
          )}
        </Flex>
      </NegativeMarginTop>
    );
  }
);

export type InlineProps = {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right' | string[];
  alignY?: 'top' | 'center' | 'bottom' | string[];
  collapseBelow?: number;
  space?: SpaceProps['padding'];
};

const NegativeMarginTop = styled(Box)<NegativeMarginTopProps>`
  padding-top: 1px;

  &::before {
    content: '';
    display: block;
    margin-top: -${(p: NegativeMarginTopProps) => p.pseudoMarginTop};
  }
`;

type NegativeMarginTopProps = {
  pseudoMarginTop: string;
};

Inline.displayName = 'Inline';
export { Inline };
