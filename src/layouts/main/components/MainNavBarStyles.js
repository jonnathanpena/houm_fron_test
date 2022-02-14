import { styled } from "@mui/material/styles";

import colors from '../../../constants/colors';

import AppBarWapper from '../../../components/wrappers/AppBarWrapper';
import BoxWrapper from "../../../components/wrappers/BoxWrapper";
import ContainerWrapper from '../../../components/wrappers/ContainerWrapper';
import InputBaseWrapper from '../../../components/wrappers/InputBaseWrapper';
import SearchIconWrapper from '../../../components/wrappers/SearchIconWrapper';

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

export const SearchWrapperStyled = styled( 'div' )(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: colors.secundaryBackground,
  '&:hover': {
    backgroundColor: colors.secundaryBackground,
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '70%',
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchContentIconStyled = styled( 'div' )(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const InputBaseSearchStyled = styled( InputBaseWrapper )(({ theme }) => ({
  color: colors.lightMenuColorText,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const SearchIconHeaderStyled = styled( SearchIconWrapper )(() => ({
  color: colors.orangeColor,
}));
