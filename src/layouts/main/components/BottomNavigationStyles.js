import { styled } from "@mui/material/styles";

import colors from "../../../constants/colors";

import AddIconInactiveWrapper from '../../../components/wrappers/AddIconInactiveWrapper';
import AddIconWrapper from '../../../components/wrappers/AddIconWrapper';
import BottomNavigationWrapper from '../../../components/wrappers/BottomNavigationWrapper';
import ContactIconInactiveWrapper from '../../../components/wrappers/ContactIconInactiveWrapper';
import ContactIconWrapper from '../../../components/wrappers/ContactIconWrapper';
import HomeIconInactiveWrapper from '../../../components/wrappers/HomeIconInactiveWrapper';
import HomeIconWrapper from '../../../components/wrappers/HomeIconWrapper';

export const BottomNavigationMobileStyled = styled( BottomNavigationWrapper )(({ theme }) => ({
  display: 'none',
  boxShadow: colors.mainBottomNavigationBoxShadow,
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
  color: colors.lightMenuColorText,
  '& .Mui-selected': {
    '& .MuiBottomNavigationAction-label': {
      color: colors.orangeColor,
    }
  },
}));

export const AddIconInactiveWrapperStyled = styled( AddIconInactiveWrapper )(() => ({
  color: colors.lightMenuColorText,
}));

export const AddIconWrapperStyled = styled( AddIconWrapper )(() => ({
  color: colors.orangeColor,
}));

export const ContactIconInactiveWrapperStyled = styled( ContactIconInactiveWrapper )(() => ({
  color: colors.lightMenuColorText,
}));

export const ContactIconWrapperStyled = styled( ContactIconWrapper )(() => ({
  color: colors.orangeColor,
}));

export const HomeIconInactiveWrapperStyled = styled( HomeIconInactiveWrapper )(() => ({
  color: colors.lightMenuColorText,
}));

export const HomeIconWrapperStyled = styled( HomeIconWrapper )(() => ({
  color: colors.orangeColor,
}));
