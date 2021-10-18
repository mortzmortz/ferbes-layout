import * as React from 'react';
import { get, SpaceProps } from 'styled-system';
import styled from '@emotion/styled';
import flattenChildren from 'react-keyed-flatten-children';
import { useTheme } from './FerbesProvider';
import { Box } from './Box';
import { Flex } from './Flex';

const responsiveFlex = (columns: TilesProps['columns']) =>
  Array.isArray(columns)
    ? columns.map(c => (c !== null ? `0 0 ${100 / Number(c)}%` : null))
    : `0 0 ${100 / Number(columns)}%`;

const Tiles = React.forwardRef<HTMLDivElement, TilesProps>(
  ({ space = null, columns = 1, children }, ref) => {
    const theme = useTheme();
    const negativeSpace = !space ? 0 : -Number(space);
    const marginTop = get(theme.space, Number(space));
    const flex = responsiveFlex(columns);

    return (
      <NegativeMarginTop pseudoMarginTop={marginTop}>
        <Flex flexWrap="wrap" marginLeft={negativeSpace} ref={ref}>
          {React.Children.map(flattenChildren(children), child =>
            child !== null && child !== undefined ? (
              <Box paddingLeft={space} paddingTop={space} flex={flex}>
                {child}
              </Box>
            ) : null
          )}
        </Flex>
      </NegativeMarginTop>
    );
  }
);

const NegativeMarginTop = styled(Box)<NegativeMarginTopProps>`
  &::before {
    content: '';
    display: block;
    margin-top: -${(p: NegativeMarginTopProps) => p.pseudoMarginTop};
  }
`;

type NegativeMarginTopProps = {
  pseudoMarginTop: string;
};

export type TilesProps = {
  children: React.ReactNode;
  columns?: number | string | Array<number | string | null | undefined>;
  space?: SpaceProps['paddingLeft'];
};

Tiles.displayName = 'Tiles';
export { Tiles };
