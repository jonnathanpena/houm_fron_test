import { BottomNavigation } from "@mui/material";

const BottomNavigationWrapper = ({ children, ...props }) => (
  <BottomNavigation {...props}>
    { children }
  </BottomNavigation>
);

export default BottomNavigationWrapper;
