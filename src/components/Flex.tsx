import styled from '@emotion/styled';
import shouldForwardProp from '../utils/shouldForwardProp';
import { allBoxProps } from './Box';
import type { BoxProps } from './Box';

const Flex = styled('div', { shouldForwardProp })<BoxProps>(
  () => ({
    display: 'flex',
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  allBoxProps
);

Flex.displayName = 'Flex';
export { Flex };
