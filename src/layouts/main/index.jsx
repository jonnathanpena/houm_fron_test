import React from 'react';

import BottomNavigationMobile from './components/BottomNavigationMobile';
import BoxWrapper from '../../components/wrappers/BoxWrapper';
import MainNavBar from './components/MainNavBar';
import PaperWrapper from '../../components/wrappers/PaperWrapper';

import {
  RootMain,
} from './MainLayoutStyles';

const MainLayout = () => (
  <RootMain>
    <MainNavBar />
    <BoxWrapper sx={{ pb: 7 }}>
      <PaperWrapper 
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigationMobile />
      </PaperWrapper>
    </BoxWrapper>
  </RootMain>
);

export default MainLayout;
