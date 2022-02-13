import { IconButton } from "@mui/material";

const IconButtonWrapper = ({ children, ...props }) => (
  <IconButton {...props}>
    { children }
  </IconButton>
);

export default IconButtonWrapper;
