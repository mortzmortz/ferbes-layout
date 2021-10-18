export type Align =
  | 'left'
  | 'center'
  | 'right'
  | Array<'left' | 'center' | 'right' | null | undefined>;
export type AlignY =
  | 'top'
  | 'center'
  | 'bottom'
  | Array<'top' | 'center' | 'bottom' | null | undefined>;

const mapValues = (
  value: string | Array<string | null | undefined>,
  valueMap: object
) => {
  if (value === undefined) return value;

  // If it's not a responsive prop, just map it directly
  if (typeof value === 'string' || value === undefined) {
    return valueMap[value];
  }

  return Array.isArray(value)
    ? value.map((x, index) => {
        if (typeof x === 'number' || typeof x === 'string') return valueMap[x];
        return null;
      })
    : undefined;
};

const alignToFlex = (align: Align) =>
  mapValues(align, {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  });

const alignYToFlex = (align: AlignY) =>
  mapValues(align, {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  });

export { alignToFlex, alignYToFlex };
