import React, {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  useContext,
} from 'react';
import { ColumnContext } from './Columns';
import { Box } from '../Box/Box';
import { styled } from '../../stitches.config';

const ColumnBox = styled(Box, {
  '&:first-of-type > *': {
    paddingTop: 0,
  },
});

const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ width, children, ...props }, forwardedRef) => {
    const { paddingLeft, paddingTop } = useContext(ColumnContext);

    return (
      <ColumnBox
        {...props}
        ref={forwardedRef}
        css={{
          width: width !== 'content' ? '100%' : undefined,
          flexShrink: width === 'content' ? 0 : undefined,
          flex:
            typeof width === 'number'
              ? `0 0 ${+width * 100}%`
              : width === 'content'
              ? undefined
              : 1,
        }}
      >
        <Box
          paddingLeft={paddingLeft}
          paddingTop={paddingTop}
          css={{
            height: '100%',
          }}
        >
          {children}
        </Box>
      </ColumnBox>
    );
  }
);

export type ColumnProps = ComponentPropsWithRef<'div'> & {
  children?: ReactNode;
  width?: 'content' | number;
};

Column.displayName = 'Column';
export { Column };
