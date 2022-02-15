import { styled } from "@mui/material/styles";

import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

import CardContentWrapper from '../../../components/wrappers/CardContentWrapper';
import CardWrapper from '../../../components/wrappers/CardWrapper';
import CardActionsWrapper from '../../../components/wrappers/CardActionsWrapper';

export const CardWrapperStyled = styled( CardWrapper )(() => ({
  width: '80%',
  margin: 'auto',
  marginBottom: 35,
  boxShadow: '0px 2px 1px -1px rgb(0 0 0 0.20), 0px 1px 1px 0px rgb(0 0 0 0.14), 0px 1px 3px 0px rgb(0 0 0 0.12)',
  borderRadius: 12,
}));

export const CardContentStyled = styled( CardContentWrapper )(() => ({
  padding: 15,
}));

export const TitlePropiertyStyled = styled( 'h3' )(() => ({
  color: colors.cardTitleColor,
  fontSize: fonts.titlePropiertyFontSize,
  lineHeight: '1.5em',
  fontWeight: 'bold',
  margin: 0,
  marginTop: 15,
}));

export const SubtitlePropiertyStyled = styled( 'span' )(() => ({
  color: colors.cardSubtitleColor,
  fontSize: fonts.subtitlePropiertyFontSize,
  lineHeight: '1.5em',
}));

export const CardActionsWrapperStyled = styled( CardActionsWrapper )(() => ({
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  textAlign: 'right',
  justifyContent: 'end',
}));
