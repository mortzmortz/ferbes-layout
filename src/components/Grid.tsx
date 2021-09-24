import * as React from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  position,
  border,
  space,
  layout,
  background,
  color,
  grid,
  flex,
  flexbox,
  shadow,
  typography,
  PositionProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  BackgroundProps,
  TypographyProps,
  GridProps as StyledSystemGridProps,
  FlexProps,
  FlexboxProps,
} from 'styled-system';

const Grid = styled('div', { shouldForwardProp })<GridProps>(
  () => ({
    display: 'grid',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  grid,
  position,
  layout,
  space,
  color,
  background,
  border,
  flex,
  flexbox,
  shadow,
  typography
);

export type GridProps = PositionProps &
  LayoutProps &
  StyledSystemGridProps &
  FlexProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  React.AllHTMLAttributes<HTMLElement> & {
    as?: As;
    children?: React.ReactNode;
  };

type As<P = any> = React.ElementType<P>;

Grid.displayName = 'Grid';
export { Grid };
