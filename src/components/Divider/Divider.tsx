import { Box } from '../Box/Box';

const Divider = ({ color }: DividerProps) => {
  return (
    <Box
      css={{
        position: 'relative',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          backgroundColor: color,
        }}
      />
    </Box>
  );
};

export interface DividerProps {
  color: string;
}

export { Divider };
