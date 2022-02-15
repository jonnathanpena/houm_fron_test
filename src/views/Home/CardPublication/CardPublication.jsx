import React from 'react';

import CardMedia from '@mui/material/CardMedia';

import GridWrapper from '../../../components/wrappers/GridWrapper';
import BadgeWrapper from '../../../components/wrappers/BadgeWrapper';
import BathIconWrapper from '../../../components/wrappers/BathIconWrapper';
import BedIconWrapper from '../../../components/wrappers/BedIconWrapper';
import Inmueble1Image from '../../../assets/images/properties/imueble1.jpg';

import {
  CardActionsWrapperStyled,
  CardContentStyled,
  CardWrapperStyled,
  SubtitlePropiertyStyled,
  TitlePropiertyStyled,
} from './CardPublicationStyles';

const CardPublication = () => {
  return (
    <CardWrapperStyled>
      <CardMedia
        component="img"
        height="200"
        image={Inmueble1Image}
        alt="green iguana"
      />
      <CardContentStyled>
        <GridWrapper container>
          <GridWrapper item>
            <SubtitlePropiertyStyled>
              Departamento
            </SubtitlePropiertyStyled>
          </GridWrapper>
        </GridWrapper>
        <GridWrapper container>
          <TitlePropiertyStyled>
            Martín Carrero
          </TitlePropiertyStyled>
        </GridWrapper>
        <GridWrapper container>
          <SubtitlePropiertyStyled>
            Dirección completa del inmueble
          </SubtitlePropiertyStyled>
        </GridWrapper>
        <GridWrapper container justifyContent="space-between">
          <GridWrapper item>
            <TitlePropiertyStyled>
              Venta
            </TitlePropiertyStyled>
          </GridWrapper>
          <GridWrapper item>
            <TitlePropiertyStyled>
              $1,500.00
            </TitlePropiertyStyled>
          </GridWrapper>
        </GridWrapper>
      </CardContentStyled>
      <CardActionsWrapperStyled>
        <BadgeWrapper badgeContent={4} color="default">
          <BathIconWrapper />
        </BadgeWrapper>
        <BadgeWrapper badgeContent={4} color="default">
          <BedIconWrapper />
        </BadgeWrapper>
      </CardActionsWrapperStyled>
    </CardWrapperStyled>
  )
};

export default CardPublication;
