import { CardActions } from '@mui/material';

const CardActionsWrapper = ({ children, ...props }) => (
  <CardActions {...props}>
    { children }
  </CardActions>
);

export default CardActionsWrapper;
