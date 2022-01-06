import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import searchPlanets from '../services/searchData';
import star from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    searchPlanets().then((data) => setPlanets(data.results));
  }, []);

  const context = {
    planets,
    filterByName,
    setFilterByName,
  };

  return (
    <star.Provider value={ context }>
      {
        children
      }
    </star.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetProvider;
