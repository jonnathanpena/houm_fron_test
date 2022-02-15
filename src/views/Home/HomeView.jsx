/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { toast } from 'react-toastify';

import CardPublication from './CardPublication/CardPublication';
import GridWrapper from '../../components/wrappers/GridWrapper';
import Header from './components/Header/Header';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

import { getAllProperties } from '../../services/property.service';
import searchProperty from '../../hooks/searchProperty';

import {
  HomeViewRoot,
} from './HomeViewStyles';

const HomeView = () => {
  const { searchText } = searchProperty();
  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getAll = async () => {
    setLoading(true);
    try {
      const data = await getAllProperties();

      if (data && data.length > 0) {
        setProperties(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(true);
  };

  const filterBySearch = () => {
    setLoading(true);
    if ( searchText ) {
      const filter = searchText.toLowerCase();
      setProperties(
        properties.filter(p => 
          p.property_type.toLowerCase().includes(filter) ||
          p.property_owner.toLowerCase().includes(filter) ||
          p.property_direction.toLowerCase().includes(filter) ||
          p.property_service.toLowerCase().includes(filter) ||
          p.property_amount.toLowerCase().includes(filter)
        )
      );
      setLoading(false);
      return;
    }

    getAll();
  };

  React.useEffect(() => {
    getAll();
  }, []);

  React.useEffect(() => {
    filterBySearch();
  }, [searchText])

  if (loading) return <LoadingScreen />;

  return (
    <GridWrapper container>
      <Header />
      <HomeViewRoot container>
        {properties.map((property, index) => (
          <GridWrapper item xs={12} sm={6} md={3} key={index}>
            <CardPublication data={property} />
          </GridWrapper>
        ))}
      </HomeViewRoot>
    </GridWrapper>
  )
};

export default HomeView;
