import React from 'react';

import CardPublication from './CardPublication/CardPublication';
import GridWrapper from '../../components/wrappers/GridWrapper';
import Header from './components/Header/Header';

import {
  HomeViewRoot,
} from './HomeViewStyles';

const HomeView = () => {
  const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <GridWrapper container>
      <Header />
      <HomeViewRoot container>
        {cards.map((position) => (
          <GridWrapper item xs={12} sm={6} md={3} key={position}>
            <CardPublication />
          </GridWrapper>
        ))}
      </HomeViewRoot>
    </GridWrapper>
  )
};

export default HomeView;
