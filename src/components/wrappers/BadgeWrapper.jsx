import Badge from '@mui/material/Badge';

const BadgeWrapper = ({ children, ...props }) => (
  <Badge {...props}>
    { children }
  </Badge>
);

export default BadgeWrapper;
