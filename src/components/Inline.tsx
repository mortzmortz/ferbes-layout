import React from 'react';
import { get, SpaceProps } from 'styled-system';
import styled from '@emotion/styled';
import { useTheme } from './FerbesProvider';
import { Box } from './Box';
import { Flex } from './Flex';
import { alignToFlex } from '../utils/align';
import { resolveResponsiveProps } from '../utils/resolveResponsiveProps';

const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({ space = null, align, collapseBelow, children }, ref) => {
    const theme = useTheme();
    const negativeSpace = !space ? 0 : -Number(space);
    const marginTop = get(theme.space, Number(space));
    const alignFlex = align ? alignToFlex(align) : null;
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
          alignItems={alignFlex}
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
  align?: 'left' | 'center' | 'right' | string[];
  collapseBelow?: number;
  children?: React.ReactNode;
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
