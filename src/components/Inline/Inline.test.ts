import { describe, expect, it } from 'vitest';
import type * as Stitches from '@stitches/react';
import { variantToCss } from './Inline';
import { Inliner } from './Inline';

describe.only('variantToCss', () => {
  const mapper = {
    left: 'flex-start',
    right: 'flex-end',
  };

  it('string variant', () => {
    const alignX = 'right';
    const result = variantToCss('justifyContent', alignX, mapper);
    expect(result).toEqual({ justifyContent: 'flex-end' });
  });
  it('transforms alignX as responsive variant to reponsive css object', () => {
    const alignX: Stitches.VariantProps<typeof Inliner>['alignX'] = {
      '@initial': 'center',
      '@bp2': 'right',
    };
    const result = variantToCss('justifyContent', alignX, mapper);
    expect(result).toEqual({
      justifyContent: 'center',
      '@bp2': {
        justifyContent: 'flex-end',
      },
    });
  });
});
