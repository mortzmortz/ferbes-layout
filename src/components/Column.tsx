import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from './Box';
import { ColumnContext } from './Columns';

export type ColumnProps = {
  children?: React.ReactNode;
  width?: 'content' | number;
};

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ width, children }, ref) => {
    const { paddingLeft, paddingTop } = React.useContext(ColumnContext);

    return (
      <ColumnBox
        ref={ref}
        width={width !== 'content' ? '100%' : undefined}
        flexShrink={width === 'content' ? 0 : undefined}
        flex={
          typeof width === 'number'
            ? `0 0 ${+width * 100}%`
            : width === 'content'
            ? null
            : 1
        }
      >
        <Box height="100%" paddingLeft={paddingLeft} paddingTop={paddingTop}>
          {children}
        </Box>
      </ColumnBox>
    );
  }
);

const ColumnBox = styled(Box)`
  &:first-of-type > * {
    padding-top: 0;
  }
`;

Column.displayName = 'Column';
export { Column };
