import * as React from 'react';
import * as CSS from 'csstype';
import styled from '@emotion/styled';
import {
  position,
  border,
  space,
  layout,
  color,
  background,
  flex,
  flexbox,
  grid,
  shadow,
  typography,
  system,
  compose,
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
  ResponsiveValue,
  Config,
} from 'styled-system';
import shouldForwardProp from '../utils/shouldForwardProp';

const config: Config = {
  gap: {
    property: 'gap',
    scale: 'space',
  },
  visibility: true,
  pointerEvents: true,
  transform: true,
  transition: true,
  transitionProperty: true,
  transitionDuration: {
    property: 'transitionDuration',
    transform: (value: any) => {
      if (typeof value === 'number') return `${value}ms`;
      else return value;
    },
  },
  transitionDelay: {
    property: 'transitionDelay',
    transform: (value: any) => {
      if (typeof value === 'number') return `${value}ms`;
      else return value;
    },
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction',
    scale: 'easings',
  },
};
// Alias
config.easing = config.transitionTimingFunction;
config.delay = config.transitionDelay;
config.duration = config.transitionDuration;

const customProps = system(config);

const allBoxProps = compose(
  position,
  layout,
  space,
  color,
  background,
  border,
  flexbox,
  flex,
  grid,
  shadow,
  typography,
  customProps
);

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
    gap?: ResponsiveValue<CSS.Property.Gap> | undefined;
    visiblity?: ResponsiveValue<CSS.Property.Visibility> | undefined;
    pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents> | undefined;
    transform?: ResponsiveValue<CSS.Property.Transform> | undefined;
    transition?: ResponsiveValue<CSS.Property.Transition> | undefined;
    transitionProperty?:
      | ResponsiveValue<CSS.Property.TransitionProperty>
      | undefined;
    transitionDuration?:
      | ResponsiveValue<CSS.Property.TransitionDuration>
      | ResponsiveValue<number>
      | undefined;
    duration?:
      | ResponsiveValue<CSS.Property.TransitionDuration>
      | ResponsiveValue<number>
      | undefined;
    transitionDelay?:
      | ResponsiveValue<CSS.Property.TransitionDelay>
      | ResponsiveValue<number>
      | undefined;
    delay?:
      | ResponsiveValue<CSS.Property.TransitionDelay>
      | ResponsiveValue<number>
      | undefined;
    transitionTimingFunction?:
      | ResponsiveValue<CSS.Property.TransitionTimingFunction>
      | undefined;
    easing?: ResponsiveValue<CSS.Property.TransitionTimingFunction> | undefined;
  };

type As<P = any> = React.ElementType<P>;

Box.displayName = 'Box';
export { Box, allBoxProps };
