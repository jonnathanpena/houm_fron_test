import { styled } from "@mui/material/styles";

import colors from "../../constants/colors";

import InputBaseWrapper from '../../components/wrappers/InputBaseWrapper';
import SearchIconWrapper from '../../components/wrappers/SearchIconWrapper';

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

export const SearchIconHeaderStyled = styled( SearchIconWrapper )(() => ({
  color: colors.orangeColor,
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
