import { Card } from "@mui/material";

const CardWrapper = ({ children, ...props }) => (
  <Card {...props}>
    { children }
  </Card>
);

export default CardWrapper;
