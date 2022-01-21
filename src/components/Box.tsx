import * as React from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  position,
  border,
  space,
  layout,
  color,
  background,
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
  FlexboxProps,
  GridProps,
} from 'styled-system';

const Box = styled('div', { shouldForwardProp })<BoxProps>(
  () => ({
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  position,
  layout,
  space,
  color,
  background,
  border,
  flexbox,
  flex,
  shadow,
  typography
);

export type BoxProps = PositionProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  GridProps &
  React.AllHTMLAttributes<HTMLElement> & {
    as?: As;
    children?: React.ReactNode;
  };

type As<P = any> = React.ElementType<P>;

Box.displayName = 'Box';
export { Box };
