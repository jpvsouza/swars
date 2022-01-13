import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import NumericSearch from './components/NumericSearch';
import PlanetProvider from './context/PlanetProvider';
import Sort from './components/Sort';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetProvider>
      <Search />
      <NumericSearch />
      <Sort />
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
