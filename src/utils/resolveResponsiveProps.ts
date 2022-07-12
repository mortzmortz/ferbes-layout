// TODO: above and below should take a number which picks the proper breakpoint
// or a string which will be translated to pixels
import { Theme } from 'styled-system';

const resolveResponsiveProps = (
  {
    above,
    below,
    breakpoints,
  }: {
    above?: number;
    below?: number;
    breakpoints?: Theme['breakpoints'];
  },
  values: any[] = []
): any[] => {
  if (!Array.isArray(breakpoints)) return values;
  // check if false but not 0
  if (!above && above !== 0 && !below && below !== 0) {
    return [null];
  }

  const lower =
    below !== undefined && below !== 0
      ? Math.min(below, breakpoints.length + 1)
      : -1;
  const higher = above !== undefined ? above : breakpoints.length + 1;

  if (lower > higher) {
    return [null];
  }

  return [
    ...Array.from({ length: breakpoints.length + 1 }).map((_, i) => {
      if (i <= lower || i > higher) {
        return Array.isArray(values[0]) ? values[0][i] ?? null : values[0];
      }
      return Array.isArray(values[1]) ? values[1][i] ?? null : values[1];
    }),
  ];
};

export { resolveResponsiveProps };
