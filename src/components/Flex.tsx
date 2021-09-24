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
  FlexProps as StyledSystemFlexProps,
  FlexboxProps,
} from 'styled-system';

const Flex = styled('div', { shouldForwardProp })<FlexProps>(
  () => ({
    display: 'flex',
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
  position,
  layout,
  flex,
  flexbox,
  space,
  color,
  background,
  border,
  shadow,
  typography
);

export type FlexProps = PositionProps &
  LayoutProps &
  FlexboxProps &
  StyledSystemFlexProps &
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

Flex.displayName = 'Flex';
export { Flex };
