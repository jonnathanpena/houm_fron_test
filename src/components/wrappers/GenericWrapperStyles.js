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
}));

export const IconButtonWrapperStyled = styled( IconButtonWrapper )(({ navbar }) => ({
  color: navbar ? colors.lightMenuColorText : colors.darkColorMenuText,
  float: navbar ? 'right' : 'initial',
}));
