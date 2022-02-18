import * as React from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { SpaceProps } from 'styled-system';
import { Box } from './Box';
import { Divider } from './Divider';
import { alignToFlex, Align } from '../utils/align';

const resolveFlexProps = (align: Align) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: alignToFlex(align),
});

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space = null, align, dividers = false, children }, ref) => {
    const stackItems = flattenChildren(children);
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
              {dividers && index > 0 ? (
                <Box width="100%" pb={space}>
                  {typeof dividers === 'string' ? (
                    <Divider color={dividers} />
                  ) : (
                    <Divider />
                  )}
                </Box>
              ) : null}
              {child}
            </Box>
          ) : null
        )}
      </Box>
    );
  }
);

export type StackProps = {
  children?: React.ReactNode;
  align?: Align;
  space?: SpaceProps['paddingBottom'];
  dividers?: boolean | string;
};

Stack.displayName = 'Stack';
export { Stack };
