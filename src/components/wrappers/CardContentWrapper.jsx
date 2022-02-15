import { CardContent } from '@mui/material';

const CardContentWrapper = ({ children, ...props }) => (
  <CardContent {...props}>
    { children }
  </CardContent>
);

export default CardContentWrapper;
