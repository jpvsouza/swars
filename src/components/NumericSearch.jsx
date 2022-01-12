import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function NumericSearch() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(PlanetContext);

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
    if (filterByNumericValues.length === 0) {
      setFilterByNumericValues([objeto]);
    } else {
      setFilterByNumericValues([...filterByNumericValues, objeto]);
    }
  }
  const options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  function returnOptions() {
    if (filterByNumericValues.length === 0) {
      return options;
    }
    return options.filter((opcao) => filterByNumericValues.every(
      (filtro) => filtro.column !== opcao,
    ));
  }

  console.log(filterByNumericValues.length);
  console.log(returnOptions());

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        {
          returnOptions().map((opcao) => <option key={ opcao }>{opcao}</option>)
        }

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
