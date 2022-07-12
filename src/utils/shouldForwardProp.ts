import memoize from '@emotion/memoize';
import isPropValid from '@emotion/is-prop-valid';
import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
} from 'styled-system';

const all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle
);

const customProps = [
  'transform',
  'transition',
  'pointerEvents',
  'visibility',
  'fill',
  'stroke',
];
const props = all.propNames ? [...all.propNames, ...customProps] : [];

const createShouldForwardProp = props => {
  const regex = new RegExp(`^(${props.join('|')})$`);
  return memoize(prop => isPropValid(prop) && !regex.test(prop));
};

export default createShouldForwardProp(props);
