// TODO: TS: use responsive props here
export type Align = string | string[];

const mapValues = (value: Align, valueMap: object) => {
  if (value === undefined) return value;

  // If it's not a responsive prop, just map it directly
  if (typeof value === 'string' || value === undefined) {
    return valueMap[value];
  }

  return Array.isArray(value) ? value.map(x => valueMap[x]) : undefined;
};

const alignToFlex = (align: Align) =>
  mapValues(align, {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  });

const alignYToFlex = (align: Align) =>
  mapValues(align, {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  });

export { alignToFlex, alignYToFlex };
