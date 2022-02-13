import { Toolbar } from "@mui/material";

const ToolbarRwapper = ({ children, ...props }) => (
  <Toolbar {...props}>
    { children }
  </Toolbar>
);

export default ToolbarRwapper;
