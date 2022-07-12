import styled from '@emotion/styled';

const Ratio = styled.div<RatioProps>`
  position: relative;
  box-sizing: border-box;

  &::after {
    content: '';
    display: block;
    height: 0;
    padding-bottom: ${p =>
      p.ratio ? `${(1 / p.ratio || 0.5) * 100}%` : '56.25%'};
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export type RatioProps = {
  ratio: number;
};

Ratio.displayName = 'Ratio';
export { Ratio };
