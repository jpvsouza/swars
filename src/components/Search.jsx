import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Search() {
  const [name, setName] = useState('');
  const { setFilterByName } = useContext(PlanetContext);

  function handleChange({ target }) {
    setName(target.value);
    setFilterByName(target.value);
  }

  return (
    <form>
      <input
        data-testid="name-filter"
        id="name"
        value={ name }
        onChange={ handleChange }
      />
    </form>
  );
}

export default Search;
