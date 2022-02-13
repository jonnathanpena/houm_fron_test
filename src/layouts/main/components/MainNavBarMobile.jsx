import React from 'react';

import images from '../../../constants/images';

import MenuWrapper from '../../../components/wrappers/MenuWrapper';
import MenuIconWrapper from '../../../components/wrappers/MenuIconWrapper';
import MenuItemWrapper from '../../../components/wrappers/MenuItemWrapper';
import TypographyWrapper from '../../../components/wrappers/TypographyWrapper';

import {
  IconButtonWrapperStyled,
} from '../../../components/wrappers/GenericWrapperStyles';
import {
  BoxWrapperNavbarStyled,
} from './MainNavBarStyles';

const MainNavBarMobile = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <TypographyWrapper
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        <img src={images.navbarLogo} alt="logo" />
      </TypographyWrapper>
      <BoxWrapperNavbarStyled sx={{ flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
      }}>
        <IconButtonWrapperStyled
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          navbar
        >
          <MenuIconWrapper />
        </IconButtonWrapperStyled>
        <MenuWrapper
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItemWrapper key={page} onClick={handleCloseNavMenu}>
              <TypographyWrapper textAlign="center">
                {page}
              </TypographyWrapper>
            </MenuItemWrapper>
          ))}
        </MenuWrapper>
      </BoxWrapperNavbarStyled>
    </>
  );
};

export default MainNavBarMobile;
