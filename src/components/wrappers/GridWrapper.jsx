import { Grid } from "@mui/material";

const GridWrapper = ({ children, ...props }) => (
  <Grid {...props}>
    { children }
  </Grid>
);

export default GridWrapper;
