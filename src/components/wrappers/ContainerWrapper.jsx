import { Container } from "@mui/material";

const ContainerWrapper = ({ children, ...props }) => (
  <Container {...props}>
    { children }
  </Container>
);

export default ContainerWrapper;
