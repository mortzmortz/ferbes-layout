import { describe, expect, it } from 'vitest';
import { sliceSpace } from './utils';

describe('sliceSpace', () => {
  it('space as number', () => {
    const space = 4;
    const collapse = 'bp2';
    const result = sliceSpace(space, collapse);
    expect(result).toEqual({
      '@initial': 4,
      '@bp1': 4,
      '@bp2': 0,
    });
  });
  it('space as responsive value', () => {
    const space = {
      '@initial': 2,
      '@bp1': 4,
      '@bp2': 8,
    };
    const collapse = 'bp2';
    const result = sliceSpace(space, collapse);
    expect(result).toEqual({
      '@initial': 2,
      '@bp1': 4,
      '@bp2': 0,
    });
  });
});
