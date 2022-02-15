import { useState, useMemo } from 'react';
import Router from './routes/Routes';

import { ToastContainer } from 'react-toastify';

import SearchContext from './contexts/SearchContext';

import './App.css';

function App() {
  const [searchText, setSeachText] = useState('');

  const searchData = useMemo(
    () => ({
      searchText,
      setSeachText,
    }),
    [searchText]
  );

  return (
    <SearchContext.Provider value={searchData}>
      <Router />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SearchContext.Provider>
  );
}

export default App;
