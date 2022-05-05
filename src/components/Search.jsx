import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Search() {
  const { filterByName, setFilterByName } = useContext(PlanetContext);

  function handleChange({ target }) {
    setFilterByName(target.value);
  }

  return (
    <form className='search'>
      <input
        data-testid="name-filter"
        value={ filterByName }
        onChange={ handleChange }
      />
    </form>
  );
}

export default Search;
