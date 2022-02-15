import React from 'react';

import GridWrapper from '../../../../components/wrappers/GridWrapper';
import {
  RootHeaderContainer,
} from './HeaderStyles';

const Header = () => {
  return (
    <RootHeaderContainer container>
      <GridWrapper xs={6} sm={8}>
        Buscador
      </GridWrapper>
      <GridWrapper xs={6} sm={4}>
        Botones
      </GridWrapper>
    </RootHeaderContainer>
  )
};

export default Header;
