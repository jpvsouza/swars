import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Sort() {
  const { setOrder } = useContext(PlanetContext);
  const [localOrder, setLocalOrder] = useState({ column: 'population', sort: 'ASC' });

  function onChangeColumn({ target }) {
    setLocalOrder({ ...localOrder, column: target.value });
  }

  function onChangeRadio({ target }) {
    if (target.value === 'ASC') {
      setLocalOrder({ ...localOrder, sort: 'ASC' });
    } else {
      setLocalOrder({ ...localOrder, sort: 'DESC' });
    }
  }

  function onClick() {
    setOrder(localOrder);
  }

  return (
    <form>
      <select data-testid="column-sort" onChange={ onChangeColumn }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="ordem"
          value="ASC"
          data-testid="column-sort-input-asc"
          checked={ localOrder.sort === 'ASC' }
          onChange={ onChangeRadio }
        />
        Ascendente
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="ordem"
          value="DESC"
          data-testid="column-sort-input-desc"
          checked={ localOrder.sort === 'DESC' }
          onChange={ onChangeRadio }
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ onClick }
      >
        Ordenar
      </button>
    </form>
  );
}

export default Sort;
