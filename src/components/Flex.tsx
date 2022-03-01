import styled from '@emotion/styled';
import shouldForwardProp from '../utils/shouldForwardProp';
import { allBoxProps } from '../utils/box-props';
import type { BoxProps } from '../utils/box-props';

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
