import React from 'react';

import MainNavBar from './components/MainNavBar';

import {
  RootMain,
} from './MainLayoutStyles';

const MainLayout = () => {
  return (
    <RootMain>
      <MainNavBar />
    </RootMain>
  );
};

export default MainLayout;
