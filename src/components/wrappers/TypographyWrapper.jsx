import { Typography } from "@mui/material";

const TypographyWrapper = ({ children, ...props }) => (
  <Typography {...props}>
    { children }
  </Typography>
);

export default TypographyWrapper;
