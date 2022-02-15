import React from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Inmueble1Image from '../../../assets/images/properties/imueble1.jpg';

import {
  CardWrapperStyled,
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardWrapperStyled>
  )
};

export default CardPublication;
