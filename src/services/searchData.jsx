const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const searchPlanets = async () => {
  const response = await fetch(ENDPOINT);
  return response.json();
};

export default searchPlanets;
