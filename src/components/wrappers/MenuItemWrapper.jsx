import { MenuItem } from "@mui/material";

const MenuItemWrapper = ({ children, ...props }) => (
  <MenuItem {...props}>
    { children }
  </MenuItem>
);

export default MenuItemWrapper;
