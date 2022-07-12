import { Box } from '../Box/Box';

function ratioStyles(ratio?: number) {
  const paddingBottom = ratio ? `${(1 / ratio || 0.5) * 100}%` : '56.25%';
  return {
    position: 'relative',
    boxSizing: 'border-box',
    minWidth: 0,
    '&::after': {
      content: '""',
      display: 'block',
      height: 0,
      paddingBottom,
    },
    '& > *': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  };
}

function Ratio({ ratio, children }: RatioProps) {
  const styles = ratioStyles(ratio);

  return <Box css={styles}>{children}</Box>;
}

export type RatioProps = {
  children?: React.ReactNode;
  ratio?: number;
};

Ratio.displayName = 'Ratio';
export { Ratio };
