import React from 'react';

import BottomNavigationActionWrapper from '../../../components/wrappers/BottomNavigationActionWrapper';

import {
  BottomNavigationMobileStyled,
  AddIconInactiveWrapperStyled,
  AddIconWrapperStyled,
  ContactIconInactiveWrapperStyled,
  ContactIconWrapperStyled,
  HomeIconInactiveWrapperStyled,
  HomeIconWrapperStyled,
} from './BottomNavigationStyles';

export default function BottomNavigationMobile() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigationMobileStyled
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationActionWrapper label="Inicio" icon={value === 0 ? <HomeIconWrapperStyled /> : <HomeIconInactiveWrapperStyled />} />
      <BottomNavigationActionWrapper label="Registrar inmueble" icon={value === 1 ? <AddIconWrapperStyled /> : <AddIconInactiveWrapperStyled />} />
      <BottomNavigationActionWrapper label="Contacto" icon={value === 2 ? <ContactIconWrapperStyled /> : <ContactIconInactiveWrapperStyled />} />
    </BottomNavigationMobileStyled>
  );
}
