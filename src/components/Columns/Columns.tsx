import * as React from 'react';
import { SpaceProps } from 'styled-system';
import { alignYToFlex, Align, AlignY, alignToFlex } from '../../utils/align';
import { mapToNegativeValue } from '../../utils/mapToNegativeValue';
import { resolveResponsiveProps } from '../../utils/resolveResponsiveProps';
import { useTheme } from '../FerbesProvider/FerbesProvider';
import { Flex } from '../Flex/Flex';
import { ColumnProps } from './Column';

const ColumnContext = React.createContext<ColumnContextValue>({
  paddingLeft: [],
  paddingTop: [],
});

const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ space = 0, align, alignY, collapseBelow = 0, children }, ref) => {
    const { breakpoints } = useTheme();
    const alignFlex = align ? alignToFlex(align) : null;
    const alignYFlex = alignY ? alignYToFlex(alignY) : null;
    const negativeSpace = mapToNegativeValue(space);
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
      [0, negativeSpace]
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
