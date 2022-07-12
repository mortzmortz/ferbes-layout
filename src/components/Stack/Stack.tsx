import * as React from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import type * as Stitches from '@stitches/react';
import { CSS, styled } from '../../stitches.config';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../stitches.config';

const childWithGap = '> * + *';

const StackElem = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,

  $$gap: 'initial',
  $$dividerColor: 'none',

  variants: {
    direction: {
      column: {
        flexDirection: 'column',
        [childWithGap]: { margin: '$$gap 0 0 0' },
      },
    },
    dividers: {
      true: {
        [childWithGap]: {
          borderTop: '1px solid $$dividerColor',
          paddingTop: '$$gap',
        },
      },
    },
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
  defaultVariants: {
    direction: 'column',
  },
});

function Stack({ space, align, dividers, children }: StitchesProps) {
  const css: CSS = {};
  css.stackGap = space ? (`$${space}` as any) : undefined; // TODO: fix types and responsive space
  css.stackDividerColor = dividers;
  const hasDividers = Boolean(dividers);

  return (
    <StackElem css={css} align={align} dividers={hasDividers}>
      {React.Children.map(flattenChildren(children), child =>
        child !== null && child !== undefined ? <Box>{child}</Box> : null
      )}
    </StackElem>
  );
}

type StitchesProps = {
  children?: React.ReactNode;
  space?: ResponsiveSpace;
  align?: Stitches.VariantProps<typeof StackElem>['align'];
  dividers?: Stitches.PropertyValue<'borderColor'>;
};

Stack.displayName = 'Stack';
export { Stack };
