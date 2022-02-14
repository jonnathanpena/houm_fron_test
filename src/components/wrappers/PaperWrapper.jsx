import { Paper } from "@mui/material";

const PaperWrapper = ({ children, ...props }) => (
  <Paper {...props}>
    { children }
  </Paper>
);

export default PaperWrapper;
