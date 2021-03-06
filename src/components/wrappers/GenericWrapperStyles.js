import { styled } from "@mui/material/styles";

import colors from "../../constants/colors";
import fonts from '../../constants/fonts';

import ButtonWrapper from "./ButtonWrapper";
import IconButtonWrapper from "./IconButtonWrapper";

export const ButtonWrapperStyled = styled( ButtonWrapper )(() => ({
  fontFamily: fonts.fontFamily,
  textTransform: 'none',
  color: colors.mainNavBarText,
  fontSize: fonts.regularFontSize,
  '&:hover': {
    background: 'transparent',
  },
}));

export const IconButtonWrapperStyled = styled( IconButtonWrapper )(() => ({
  color: colors.lightMenuColorText,
  float: 'right',
}));
