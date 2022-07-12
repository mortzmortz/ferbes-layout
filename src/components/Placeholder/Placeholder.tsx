import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box/Box';

const Placeholder = React.forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ width = 'auto', height = 120, label }, ref) => (
    <PlaceholderBox width={width} height={height} ref={ref}>
      {label ? (
        <Box as="p" px="8px">
          {label}
        </Box>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" />
          <line x1="100%" y1="0" x2="0" y2="100%" />
        </svg>
      )}
    </PlaceholderBox>
  )
);

export type PlaceholderProps = {
  width?: string | number;
  height?: string | number;
  label?: string;
};

const PlaceholderBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(73, 80, 87, 0.05);
  border: 1px solid rgba(73, 80, 87, 0.5);
  overflow: hidden;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: rgba(73, 80, 87, 0.8);
    font-family: Courier, monospace;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    line {
      stroke-width: 1px;
      stroke: rgba(73, 80, 87, 0.2);
    }
  }
`;

Placeholder.displayName = 'Placeholder';
export { Placeholder };
