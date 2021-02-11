import { AllHTMLAttributes, ReactNode } from 'react';
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
  FlexProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  BackgroundProps,
  TypographyProps,
  FlexboxProps,
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
  FlexProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  AllHTMLAttributes<HTMLElement> & {
    as?: As;
    children?: ReactNode;
  };

type As<P = any> = React.ElementType<P>;

Box.displayName = 'Box';
export { Box };
