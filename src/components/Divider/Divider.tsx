import { Box } from '../Box/Box';

const Divider = ({ color = 'lightgrey' }: DividerProps) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        height="1px"
        backgroundColor={color}
      />
    </Box>
  );
};

interface DividerProps {
  color?: string;
}

export { Divider };
