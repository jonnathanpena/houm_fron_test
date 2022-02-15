import { Box } from '@mui/material';

import images from '../../constants/images';

const Logo = ({ sx }) => {
  return (
    <Box sx={{
      width: 150,
      borderRadius: 10,
      padding: '5px',
      marginLeft: 1,
      ...sx,
    }}
    >
      <img src={images.navbarLogo} alt="logo" width="100%" />
    </Box>
  );
};

export default Logo;
