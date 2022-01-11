import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import searchPlanets from '../services/searchData';
import star from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{}]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  function compare(a, b) {
    if (order.sort === 'ASC') {
      const menosUm = -1;
      if (Number(a[order.column]) < Number(b[order.column])) return menosUm;
      if (Number(a[order.column]) > Number(b[order.column])) return 1;
      return 0;
    } const menosUm = -1;
    if (Number(a[order.column]) > Number(b[order.column])) return menosUm;
    if (Number(a[order.column]) < Number(b[order.column])) return 1;
    return 0;
  }

  useEffect(() => {
    searchPlanets().then((data) => setPlanets(data.results.sort((a, b) => {
      const menorQueUm = -1;
      if (a.name < b.name) return menorQueUm;
      if (a.name > b.name) return 1;
      return 0;
    })));
  }, []);

  useEffect(() => {
    console.log('executou o use effect de ordem');
    setPlanets((planetas) => [...planetas].sort(compare));
  }, [order]);

  const context = {
    planets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
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
