import React from 'react';

import colors from '../../../constants/colors';
import images from '../../../constants/images';

import AppBarWapper from '../../../components/wrappers/AppBarWrapper';
import BoxWrapper from '../../../components/wrappers/BoxWrapper';
import ToolbarWrapper from '../../../components/wrappers/ToolBarWrapper';
import TypographyWrapper from '../../../components/wrappers/TypographyWrapper';

import MainNavBarMobile from './MainNavBarMobile';

import {
  ButtonWrapperStyled,
} from '../../../components/wrappers/GenericWrapperStyles';
import {
  BoxWrapperNavbarStyled,
  NavBarContainerStyles,
} from './MainNavBarStyles';

const MainNavBar = () => {
  const pages = ['Registrar inmueble', 'Contacto'];

  return (
    <AppBarWapper position="static">
      <NavBarContainerStyles maxWidth="xl">
        <ToolbarWrapper disableGutters>
          <TypographyWrapper
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: {
              xs: 'none',
              md: 'flex'
            }}}
          >
            <img src={images.navbarLogo} alt='logo' />
          </TypographyWrapper>
          <BoxWrapperNavbarStyled
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page) => (
              <ButtonWrapperStyled
                key={page}
                sx={{ my: 2, color: colors.mainNavBarText, display: 'block' }}
              >
                {page}
              </ButtonWrapperStyled>
            ))}
          </BoxWrapperNavbarStyled>
          <MainNavBarMobile pages={pages} />
        </ToolbarWrapper>
      </NavBarContainerStyles>
    </AppBarWapper>
  )
};

export default MainNavBar;
