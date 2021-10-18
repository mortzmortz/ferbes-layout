import * as React from 'react';
import { useTheme } from './FerbesProvider';
import { Flex } from './Flex';
import { alignYToFlex, Align, AlignY, alignToFlex } from '../utils/align';
import { resolveResponsiveProps } from '../utils/resolveResponsiveProps';
import { SpaceProps } from 'styled-system';
import { ColumnProps } from './Column';

const spaceToNegativeMarginLeft = (space: SpaceProps['marginLeft']) =>
  Array.isArray(space)
    ? space.map(s => (s !== null ? -Number(s) : null))
    : typeof space === 'number'
    ? -space
    : -Number(space);

const ColumnContext = React.createContext<ColumnContextValue>({
  paddingLeft: [],
  paddingTop: [],
});

const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ space = 0, align, alignY, collapseBelow = 0, children }, ref) => {
    const { breakpoints } = useTheme();
    const alignFlex = align ? alignToFlex(align) : null;
    const alignYFlex = alignY ? alignYToFlex(alignY) : null;
    const negativeMarginLeft = spaceToNegativeMarginLeft(space);
    const flexDirection = resolveResponsiveProps(
      { below: collapseBelow, breakpoints },
      ['column', 'row']
    );
    const paddingLeft = resolveResponsiveProps(
      { below: collapseBelow, breakpoints },
      [0, space]
    );
    const paddingTop = resolveResponsiveProps(
      { below: collapseBelow, breakpoints },
      [space, 0]
    );
    const marginLeft = resolveResponsiveProps(
      { below: collapseBelow, breakpoints },
      [0, negativeMarginLeft]
    );

    return (
      <Flex
        ref={ref}
        marginLeft={marginLeft}
        alignItems={alignYFlex}
        justifyContent={alignFlex}
        flexDirection={flexDirection}
      >
        <ColumnContext.Provider value={{ paddingLeft, paddingTop }}>
          {children}
        </ColumnContext.Provider>
      </Flex>
    );
  }
);

export type ColumnsProps = {
  children:
    | Array<React.ReactElement<ColumnProps> | null>
    | React.ReactElement<ColumnProps>
    | null;
  align?: Align;
  alignY?: AlignY;
  collapseBelow?: number;
  space?: SpaceProps['paddingLeft'];
};

interface ColumnContextValue {
  paddingLeft: SpaceProps['paddingLeft'];
  paddingTop: SpaceProps['paddingTop'];
}

Columns.displayName = 'Columns';
export { Columns, ColumnContext };
