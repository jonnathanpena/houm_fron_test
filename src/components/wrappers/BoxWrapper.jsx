import { Box } from "@mui/material";

const BoxWrapper = ({ children, ...props }) => (
  <Box {...props}>
    { children }
  </Box>
);

export default BoxWrapper;
