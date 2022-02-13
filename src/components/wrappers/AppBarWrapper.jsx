import { AppBar } from "@mui/material";

const AppBarWrapper = ({ children, ...props }) => (
  <AppBar {...props}>
    { children }
  </AppBar>
);

export default AppBarWrapper;
