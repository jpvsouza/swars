const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
const searchPlanets = () => fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => data.results);

export default searchPlanets;
