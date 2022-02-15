import React from 'react';

import searchProperty from '../../hooks/searchProperty';

import {
  InputBaseSearchStyled,
  SearchWrapperStyled,
  SearchContentIconStyled,
  SearchIconHeaderStyled,
} from './SearchInputStyles';

const InputSearch = ( props ) => {
  const { searchText, setSeachText } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    if ( value ) {
      setSeachText(value);
      return;
    }

    setSeachText('');
  };

  return (
    <>
      <SearchContentIconStyled>
        <SearchIconHeaderStyled />
      </SearchContentIconStyled>
      <InputBaseSearchStyled
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchText}
        onChange={handleChange}
      />
    </>
  );
};

const SearchInput = (props) => {
  const { xs, md } = props;
  const { searchText, setSeachText } = searchProperty();

  if ( xs === 'none' && md === 'flex') {
    return (
      <SearchWrapperStyled 
        sx={{ display: { xs: 'none', md: 'flex' }}}
      >
        <InputSearch 
          searchText={searchText}
          setSeachText={setSeachText}
        />
      </SearchWrapperStyled>
    );
  }

  return (
    <SearchWrapperStyled 
      sx={{ display: { xs: 'flex', md: 'none' }}}
    >
      <InputSearch 
        searchText={searchText}
        setSeachText={setSeachText}
      />
    </SearchWrapperStyled>
  );
};

export default SearchInput;
