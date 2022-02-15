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

const CardPublication = ( props ) => {
  const { data } = props;

  return (
    <CardWrapperStyled>
      <CardMedia
        component="img"
        height="200"
        image={data.image}
        alt="Property image"
      />
      <CardContentStyled>
        <GridWrapper container>
          <GridWrapper item>
            <SubtitlePropiertyStyled>
              { data.property_type }
            </SubtitlePropiertyStyled>
          </GridWrapper>
        </GridWrapper>
        <GridWrapper container>
          <TitlePropiertyStyled>
            { data.property_owner }
          </TitlePropiertyStyled>
        </GridWrapper>
        <GridWrapper container>
          <SubtitlePropiertyStyled>
            { data.property_direction }
          </SubtitlePropiertyStyled>
        </GridWrapper>
        <GridWrapper container justifyContent="space-between">
          <GridWrapper item>
            <TitlePropiertyStyled>
              { data.property_service }
            </TitlePropiertyStyled>
          </GridWrapper>
          <GridWrapper item>
            <TitlePropiertyStyled>
              { `$${data.property_amount}` }
            </TitlePropiertyStyled>
          </GridWrapper>
        </GridWrapper>
      </CardContentStyled>
      <CardActionsWrapperStyled>
        <BadgeWrapper badgeContent={data.bath_count} color="default">
          <BathIconWrapper />
        </BadgeWrapper>
        <BadgeWrapper badgeContent={data.bed_count} color="default">
          <BedIconWrapper />
        </BadgeWrapper>
      </CardActionsWrapperStyled>
    </CardWrapperStyled>
  )
};

export default CardPublication;
