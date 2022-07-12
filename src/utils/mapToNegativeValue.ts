import { SpaceProps } from 'styled-system';

export const mapToNegativeValue = (space: SpaceProps['margin']) =>
  !space
    ? 0
    : Array.isArray(space)
    ? space.map(s => (s !== null ? -Number(s) : null))
    : typeof space === 'number'
    ? -space
    : -Number(space);
