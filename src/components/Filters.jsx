import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

export default function Filters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetContext);

  function onClick({ target }) {
    setFilterByNumericValues(filterByNumericValues
      .filter((filtro) => filtro.column !== target.id));
  }

  return (
    <div>
      {
        filterByNumericValues.length > 0 ? filterByNumericValues
          .map((filtro) => (
            <div key={ filtro.column } data-testid="filter">
              <p>{`${filtro.column} ${filtro.comparison} ${filtro.quantity}`}</p>
              <button id={ filtro.column } onClick={ onClick } type="button">X</button>
            </div>)) : <p>Sem filtro numérico aplicado</p>
      }
    </div>
  );
}
