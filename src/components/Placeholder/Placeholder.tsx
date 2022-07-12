import type * as Stitches from '@stitches/react';
import { config, styled } from '../../stitches.config';
import { Box } from '../Box/Box';

const PlaceholderElem = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 0,
  background: 'rgba(73, 80, 87, 0.05)',
  border: '1px solid rgba(73, 80, 87, 0.5)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  '& p': {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    color: 'rgba(73, 80, 87, 0.8)',
    fontFamily: 'Courier, monospace',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    boxSizing: 'border-box',
  },
  '& svg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  '& svg line': {
    strokeWidth: '1px',
    stroke: 'rgba(73, 80, 87, 0.2)',
  },
});

const Placeholder = ({
  width = 'auto',
  height = '120px',
  label,
}: PlaceholderProps) => (
  <PlaceholderElem
    css={{
      width,
      height,
    }}
  >
    {label ? (
      <Box as="p" px="4">
        {label}
      </Box>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100%" y2="100%" />
        <line x1="100%" y1="0" x2="0" y2="100%" />
      </svg>
    )}
  </PlaceholderElem>
);

export type PlaceholderProps = {
  width?: Stitches.PropertyValue<'width', typeof config>;
  height?: Stitches.PropertyValue<'height', typeof config>;
  label?: string;
};

Placeholder.displayName = 'Placeholder';
export { Placeholder };
