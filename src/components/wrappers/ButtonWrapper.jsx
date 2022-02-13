import { Button } from "@mui/material";

const ButtonWrapper = ({ children, ...props }) => (
  <Button {...props}>
    { children }
  </Button>
);

export default ButtonWrapper;
