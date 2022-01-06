import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Search />
      <Table />
    </PlanetProvider>
  );
}

export default App;
