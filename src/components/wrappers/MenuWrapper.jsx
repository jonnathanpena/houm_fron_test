import { Menu } from "@mui/material";

const MenuWrapper = ({ children, ...props }) => (
  <Menu {...props}>
    { children }
  </Menu>
);

export default MenuWrapper;
