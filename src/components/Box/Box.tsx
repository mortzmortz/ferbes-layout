import styled from '@emotion/styled';
import { allBoxProps } from '../../utils/box-props';
import type { BoxProps } from '../../utils/box-props';
import shouldForwardProp from '../../utils/shouldForwardProp';

const Box = styled('div', {
  shouldForwardProp,
})<BoxProps>(
  () => ({
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  allBoxProps
);

Box.displayName = 'Box';
export { Box };
