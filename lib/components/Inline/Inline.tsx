import React, {
  Children,
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
} from 'react';
import type * as Stitches from '@stitches/react';
import flattenChildren from 'react-keyed-flatten-children';
import { config, ResponsiveSpace, styled } from '../../stitches.config';
import { spaceToNegativeSpace } from '../../utils';
import { Box } from '../Box/Box';

export const Inliner = styled(Box, {
  display: 'flex',
  flexWrap: 'wrap',
  variants: {
    alignX: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
    alignY: {
      top: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      bottom: {
        alignItems: 'flex-end',
      },
    },
  },
});

const Inline = forwardRef<HTMLDivElement, InlineProps>(
  ({ space, alignX, alignY, collapse, children, ...props }, forwardedRef) => {
    const negativeSpace = spaceToNegativeSpace(space);
    const display: Stitches.VariantProps<typeof Box>['display'] = collapse
      ? {
          '@initial': 'flex',
          [`@${collapse}`]: 'block',
        }
      : 'block';
    const inlinerStyles = collapse
      ? {
          flexDirection: 'column',
          [`@${collapse}`]: {
            flexDirection: 'row',
          },
        }
      : {
          flexDirection: 'row',
        };
    const childStyles = variantToCss('justifyContent', alignX, {
      left: 'flex-start',
      right: 'flex-end',
    });

    return (
      <Box marginTop={negativeSpace}>
        <Inliner
          {...props}
          marginLeft={negativeSpace}
          alignX={alignX}
          alignY={alignY}
          css={inlinerStyles}
          ref={forwardedRef}
        >
          {Children.map(flattenChildren(children), child =>
            child !== null && child !== undefined ? (
              <Box
                display={display}
                paddingLeft={space}
                paddingTop={space}
                css={childStyles}
              >
                {child}
              </Box>
            ) : null
          )}
        </Inliner>
      </Box>
    );
  }
);

export function variantToCss(
  property: string,
  variant?: Stitches.VariantProps<typeof Inliner>['alignX'],
  mapper?: { [key: string]: Stitches.CSSProperties['justifyContent'] }
) {
  if (!variant) return undefined;
  if (typeof variant === 'string') {
    const cssValue = (mapper && mapper[variant]) || variant;
    return {
      [property]: cssValue,
    };
  }

  const result = {};

  for (const [key, value] of Object.entries(variant)) {
    const cssValue = (mapper && value && mapper[value]) || value;
    if (key === '@initial') {
      result[property] = cssValue;
    } else {
      result[key] = {
        [property]: cssValue,
      };
    }
  }

  return result;
}

export type InlineProps = ComponentPropsWithRef<'div'> & {
  children?: ReactNode;
  space?: ResponsiveSpace;
  alignX?: Stitches.VariantProps<typeof Inliner>['alignX'];
  alignY?: Stitches.VariantProps<typeof Inliner>['alignY'];
  collapse?: keyof typeof config.media;
};

Inline.displayName = 'Inline';
export { Inline };
