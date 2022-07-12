import * as CSS from 'csstype';
import { AllHTMLAttributes, ElementType, ReactNode } from 'react';
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
  Theme,
  TLengthStyledSystem,
  ThemeValue,
  ObjectOrArray,
} from 'styled-system';
import { defaultTheme } from '../defaultTheme';

export interface ThemeWithEasing extends Theme {
  easings?: ObjectOrArray<CSS.Property.TransitionTimingFunction>;
}

export interface OtherProps<
  ThemeType extends ThemeWithEasing = Required<ThemeWithEasing>
> {
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<
    CSS.Property.TransformOrigin<TLengthStyledSystem>,
    ThemeType
  >;
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType>;
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition, ThemeType>;
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  fill?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  stroke?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  outline?: ResponsiveValue<CSS.Property.Outline, ThemeType>;
  outlineColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  gap?: ResponsiveValue<ThemeValue<'space', ThemeType>, ThemeType>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
  transition?: ResponsiveValue<CSS.Property.Transition, ThemeType>;
  transitionProperty?: ResponsiveValue<
    CSS.Property.TransitionProperty,
    ThemeType
  >;
  transitionDuration?:
    | ResponsiveValue<CSS.Property.TransitionDuration, ThemeType>
    | ResponsiveValue<number>;
  duration?:
    | ResponsiveValue<CSS.Property.TransitionDuration, ThemeType>
    | ResponsiveValue<number>;
  transitionDelay?:
    | ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>
    | ResponsiveValue<number>;
  delay?:
    | ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>
    | ResponsiveValue<number>;
  transitionTimingFunction?: ResponsiveValue<
    ThemeValue<'easings', ThemeType>,
    ThemeType
  >;
  easing?: ResponsiveValue<ThemeValue<'easings', ThemeType>, ThemeType>;
  animationDuration?:
    | ResponsiveValue<CSS.Property.AnimationDelay, ThemeType>
    | ResponsiveValue<number>;
}

const config: Config = {
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  overflowWrap: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  outline: true,
  outlineColor: {
    property: 'outlineColor',
    scale: 'colors',
  },
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  textOverflow: true,
  whiteSpace: true,
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
  animationDuration: {
    property: 'animationDuration',
    transform: (value: any) => {
      if (typeof value === 'number') return `${value}ms`;
      else return value;
    },
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

type BoxProps = PositionProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  GridProps &
  OtherProps &
  Omit<
    AllHTMLAttributes<HTMLElement>,
    'width' | 'height' | 'as' | 'children'
  > & {
    as?: As;
    children?: ReactNode | ReactNode[];
  };

type As<P = any> = ElementType<P>;

export { allBoxProps };
export type { BoxProps };
