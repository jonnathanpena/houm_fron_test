/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import InfiniteScroll from "react-infinite-scroll-component";
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
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [next, setNext] = React.useState(true);

  const getAll = async (page) => {
    if ( parseInt(page.toString()) === 0 ) {
      setPage( 1 );
      setNext(false);
      return;
    } else if ( parseInt(page.toString()) === 1 ) {
      setNext(true);
      setProperties([]);
    }
    try {
      const response = await getAllProperties(page);

      if (response && response.data && response.data.length > 0) {
        setProperties([...properties, ...response.data]);
        setPage(parseInt(response.next));
        setNext(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
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
      setNext(false);
      setLoading(false);
      return;
    }

    getAll(1);
  };

  const nextPage = () => {
    getAll(page);
  };

  React.useEffect(() => {
    getAll(1);
  }, []);

  React.useEffect(() => {
    filterBySearch();
  }, [searchText])

  if (loading) return <LoadingScreen />;

  return (
    <GridWrapper container>
      <Header />
      <HomeViewRoot container>
        <InfiniteScroll
          dataLength={properties.length}
          next={nextPage}
          hasMore={next}
          loader={<LoadingScreen />}
         >
          {properties.map((property, index) => (
            <GridWrapper item xs={12} sm={6} md={3} key={index}>
              <CardPublication data={property} />
            </GridWrapper>
          ))}
        </InfiniteScroll>
      </HomeViewRoot>
    </GridWrapper>
  )
};

export default HomeView;
