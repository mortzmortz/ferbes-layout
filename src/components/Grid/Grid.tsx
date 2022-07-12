import styled from '@emotion/styled';
import shouldForwardProp from '../../utils/shouldForwardProp';
import { allBoxProps } from '../../utils/box-props';
import type { BoxProps } from '../../utils/box-props';

const Grid = styled('div', { shouldForwardProp })<BoxProps>(
  () => ({
    display: 'grid',
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  allBoxProps
);

Grid.displayName = 'Grid';
export { Grid };
