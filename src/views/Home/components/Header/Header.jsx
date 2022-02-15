import React from 'react';

import SearchInput from '../../../../components/SearchInput/SearchInput';
import GridWrapper from '../../../../components/wrappers/GridWrapper';

import {
  RootHeaderContainer,
} from './HeaderStyles';

const Header = () => (
  <RootHeaderContainer container>
    <GridWrapper xs={6} sm={8}>
      <SearchInput xs="none" md="flex" />
    </GridWrapper>
  </RootHeaderContainer>
);

export default Header;
