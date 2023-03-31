import { type ReactNode, Children, isValidElement, cloneElement } from 'react';
import { isFragment } from 'react-is';
import { config, ResponsiveSpace } from './stitches.config';

const breakpoints = ['initial', ...Object.keys(config.media)] as (
  | 'initial'
  | keyof typeof config.media
)[];

export function spaceToNegativeSpace(space: ResponsiveSpace) {
  if (!space) return undefined;
  if (typeof space === 'string' || typeof space === 'number')
    return -`${space}`;
  else {
    let resp = {};
    for (const [key, value] of Object.entries(space)) {
      resp[key] = value ? -`${value}` : undefined;
    }
    return resp;
  }
}

export function sliceSpace(
  space?: ResponsiveSpace,
  maxBreakpoint?: keyof (typeof config)['media']
) {
  if (!space || !maxBreakpoint) return undefined;
  const result = {};
  const maxIndex = breakpoints.indexOf(maxBreakpoint);
  for (const [index, breakpoint] of breakpoints.entries()) {
    const bp = `@${breakpoint}`;
    if (index < maxIndex) {
      if (typeof space === 'number' || typeof space === 'string') {
        result[bp] = space;
      } else {
        result[bp] = space[bp];
      }
    } else if (index === maxIndex) {
      result[bp] = 0;
    }
  }
  return result;
}

// https://github.com/grrowl/react-keyed-flatten-children/issues/3
export function flattenChildren(
  children: ReactNode,
  depth: number = 0,
  keys: (string | number)[] = []
): ReactNode[] {
  return Children.toArray(children).reduce(
    (acc: ReactNode[], node, nodeIndex) => {
      if (isFragment(node)) {
        acc.push.apply(
          acc,
          flattenChildren(
            node.props.children,
            depth + 1,
            keys.concat(node.key || nodeIndex)
          )
        );
      } else {
        if (isValidElement(node)) {
          acc.push(
            cloneElement(node, {
              key: keys.concat(String(node.key)).join('.'),
            })
          );
        } else if (typeof node === 'string' || typeof node === 'number') {
          acc.push(node);
        }
      }
      return acc;
    },
    []
  );
}
