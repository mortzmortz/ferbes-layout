import * as React from 'react';
import { Box } from './Box';
import { alignToFlex, Align } from '../utils/align';
import { SpaceProps } from 'styled-system';

const resolveFlexProps = (align: Align) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: alignToFlex(align),
});

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space = null, align, children }, ref) => {
    const stackItems = React.Children.toArray(children);
    const stackCount = stackItems.length;
    const flexProps = align ? resolveFlexProps(align) : {};

    return (
      <Box ref={ref}>
        {stackItems.map((child, index) =>
          child !== null && child !== undefined ? (
            <Box
              key={index}
              paddingBottom={index !== stackCount - 1 ? space : null}
              {...flexProps}
            >
              {child}
            </Box>
          ) : null
        )}
      </Box>
    );
  }
);

// TODO: TS Align: use responsive prop types
export type StackProps = {
  children?: React.ReactNode;
  align?: Align;
  space?: SpaceProps['paddingBottom'];
};

Stack.displayName = 'Stack';
export { Stack };
