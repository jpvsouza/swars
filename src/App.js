import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetContext from './context/planetContext';
import searchPlanets from './services/searchData';

function App() {
  // const planetData = async () => {
  //   const data = await searchPlanets();
  //   return data;
  // };

  return (
    <PlanetContext.Provider value={ searchPlanets() }>
      <Table />
    </PlanetContext.Provider>
  );
}

export default App;
