import { styled } from "@mui/material/styles";

import colors from '../../../constants/colors';

import AppBarWapper from '../../../components/wrappers/AppBarWrapper';
import BoxWrapper from "../../../components/wrappers/BoxWrapper";
import ContainerWrapper from '../../../components/wrappers/ContainerWrapper';

export const NavBarContainerStyles = styled( ContainerWrapper )(() => ({
  background: colors.mainBackground,
  minHeight: 60,
}));

export const BoxWrapperNavbarStyled = styled( BoxWrapper )(() => ({
  justifyContent: 'flex-end',
}));

export const MainNavbarHeaderStyled = styled( AppBarWapper )(({ theme }) => ({
  boxShadow: colors.mainNavBarBoxShadow,
  [theme.breakpoints.down('md')]: {
    boxShadow: 'none',
  }
}));
