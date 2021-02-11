import React from 'react';
import { Box } from './Box';
import { useTheme } from './FerbesProvider';
import { resolveResponsiveProps } from '../utils/resolveResponsiveProps';

const Hidden = React.forwardRef<HTMLDivElement, HiddenProps>(
  ({ above, below, children }, ref) => {
    const { breakpoints } = useTheme();
    const display = resolveResponsiveProps({ above, below, breakpoints }, [
      'none',
      'block',
    ]);

    return (
      <Box display={display} ref={ref}>
        {children}
      </Box>
    );
  }
);

export type HiddenProps = {
  children?: React.ReactNode;
  below?: number;
  above?: number;
};

Hidden.displayName = 'Hidden';
export { Hidden };
