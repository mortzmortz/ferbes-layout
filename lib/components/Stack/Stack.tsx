import React, { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import { styled } from '../../stitches.config';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../stitches.config';
import { Divider } from '../Divider/Divider';
import { flattenChildren } from '../../utils';

const StackElem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  minWidth: 0,

  variants: {
    align: {
      center: {
        alignItems: 'center',
      },
      left: {
        alignItems: 'flex-start',
      },
      right: {
        alignItems: 'flex-end',
      },
    },
  },
});

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ space, align, dividers, children, ...props }, forwardedRef) => {
    const stackItems = flattenChildren(children);
    const stackCount = stackItems.length;

    return (
      <StackElem {...props} ref={forwardedRef} align={align}>
        {stackItems.map((child, index) =>
          child !== null && child !== undefined ? (
            <Box
              key={index}
              paddingBottom={index !== stackCount - 1 ? space : 0}
            >
              {dividers && index > 0 ? (
                <Box
                  paddingBottom={space}
                  css={{
                    width: '100%',
                  }}
                >
                  <Divider color={dividers} />
                </Box>
              ) : null}
              {child}
            </Box>
          ) : null
        )}
      </StackElem>
    );
  }
);

export type StackProps = ComponentPropsWithRef<'div'> & {
  children?: ReactNode;
  space?: ResponsiveSpace;
  align?: Stitches.VariantProps<typeof StackElem>['align'];
  dividers?: string;
};

Stack.displayName = 'Stack';
export { Stack };
