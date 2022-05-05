import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import NumericSearch from './components/NumericSearch';
import PlanetProvider from './context/PlanetProvider';
import Sort from './components/Sort';
import Filters from './components/Filters';
import './index.css';
import Name from './components/Name';

function App() {
  return (
    <PlanetProvider>
      <Name />
      <Search />
      <NumericSearch />
      <Sort />
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
