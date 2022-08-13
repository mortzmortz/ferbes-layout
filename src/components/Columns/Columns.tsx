import React, { createContext, forwardRef } from 'react';
import type { ReactElement } from 'react';
import { sliceSpace, spaceToNegativeSpace } from '../../utils';
import { config } from '../../stitches.config';
import type { ResponsiveSpace } from '../../stitches.config';
import { Box } from '../Box/Box';
import { ColumnProps } from './Column';

const ColumnContext = createContext({} as ColumnContextValue);

const mapToFlex = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  top: 'flex-start',
  bottom: 'flex-end',
} as const;

const Columns = forwardRef<HTMLDivElement, ColumnsProps>(
  ({ space, alignX, alignY, collapse, children }, ref) => {
    const justifyContent = alignX ? mapToFlex[alignX] : undefined;
    const alignItems = alignY ? mapToFlex[alignY] : undefined;
    const negativeSpace = spaceToNegativeSpace(space);
    const collapseStyle = collapse
      ? {
          flexDirection: 'column',
          [`@${collapse}`]: {
            flexDirection: 'row',
          },
        }
      : {
          flexDirection: 'row',
        };
    const paddingTop = sliceSpace(space, collapse);

    return (
      <Box
        ref={ref}
        marginLeft={negativeSpace}
        css={{
          display: 'flex',
          alignItems,
          justifyContent,
          ...collapseStyle,
        }}
      >
        <ColumnContext.Provider value={{ paddingLeft: space, paddingTop }}>
          {children}
        </ColumnContext.Provider>
      </Box>
    );
  }
);

export type ColumnsProps = {
  children?:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  space?: ResponsiveSpace;
  collapse?: keyof typeof config['media'];
};

interface ColumnContextValue {
  paddingLeft?: ResponsiveSpace;
  paddingTop?: ResponsiveSpace;
}

Columns.displayName = 'Columns';
export { Columns, ColumnContext };
