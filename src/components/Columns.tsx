import React from 'react';
import { useTheme } from './FerbesProvider';
import { Flex } from './Flex';
import { alignYToFlex, Align } from '../utils/align';
import { resolveResponsiveProps } from '../utils/resolveResponsiveProps';
import { SpaceProps } from 'styled-system';

const spaceToNegativeMarginLeft = (space: SpaceProps['marginLeft']) =>
  Array.isArray(space)
    ? // @ts-ignore
      space.map(s => (s !== null ? -s : null))
    : typeof space === 'number'
    ? -space
    : `-${String(space)}`;

const ColumnContext = React.createContext<ColumnContextValue>({
  paddingLeft: [],
  paddingTop: [],
});

const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ space = null, alignY, collapseBelow = 0, children }, ref) => {
    const { breakpoints } = useTheme();
    const alignFlex = alignY ? alignYToFlex(alignY) : null;
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
        alignItems={alignFlex}
        flexDirection={flexDirection}
      >
        <ColumnContext.Provider value={{ paddingLeft, paddingTop }}>
          {children}
        </ColumnContext.Provider>
      </Flex>
    );
  }
);

// TODO: TS Align: use responsive prop types
export type ColumnsProps = {
  children?: React.ReactNode;
  alignY?: Align;
  collapseBelow?: number;
  space?: SpaceProps['paddingLeft'];
};

interface ColumnContextValue {
  paddingLeft: SpaceProps['paddingLeft'];
  paddingTop: SpaceProps['paddingTop'];
}

Columns.displayName = 'Columns';
export { Columns, ColumnContext };
