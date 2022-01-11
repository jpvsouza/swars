import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function NumericSearch() {
  const { setFilterByNumericValues } = useContext(PlanetContext);

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
    // setFilterByNumericValues([...filterByNumericValues, objeto]);
    setFilterByNumericValues([objeto]);
  }

  const options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        {
          options.map((opcao) => <option key={ opcao }>{opcao}</option>)
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
