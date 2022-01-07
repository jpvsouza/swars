import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function NumericSearch() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [quantity, setQuantity] = useState(0);

  function handleColumn({ target }) {
    setColumn(target.value);
  }
  function handleComparison({ target }) {
    setComparison(target.value);
  }
  function handleQuantity({ target }) {
    setQuantity(target.value);
  }

  const objeto = {
    column,
    comparison,
    quantity,
  };

  function handleClick() {
    // if (filterByNumericValues[0].column === undefined) {
    //   setFilterByNumericValues(objeto);
    // } else setFilterByNumericValues([...filterByNumericValues, objeto]);
    setFilterByNumericValues([objeto]);
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ handleQuantity }
        value={ objeto.quantity }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>
    </form>
  );
}

export default NumericSearch;
