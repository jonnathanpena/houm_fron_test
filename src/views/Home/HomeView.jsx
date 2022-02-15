import React from 'react';

import { toast } from 'react-toastify';

import CardPublication from './CardPublication/CardPublication';
import GridWrapper from '../../components/wrappers/GridWrapper';
import Header from './components/Header/Header';

import { getAllProperties } from '../../services/property.service';

import {
  HomeViewRoot,
} from './HomeViewStyles';

const HomeView = () => {
  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getAll = async () => {
    try {
      const data = await getAllProperties();

      if (data && data.length > 0) {
        setProperties(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getAll();
  }, []);

  if (loading) return <p>...Loading</p>;

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
