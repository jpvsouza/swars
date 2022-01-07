import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Header from './Header';

export default function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(PlanetContext);
  let filtPlanets = planets.filter((planet) => (planet.name).includes(filterByName));

  switch (filterByNumericValues[0].comparison) {
  case 'maior que':
    console.log('maior que');
    filtPlanets = planets.filter((planet) => (planet.name).includes(filterByName) === true
      && planet[filterByNumericValues[0].column] > filterByNumericValues[0].quantity);
    break;
  case 'menor que':
    filtPlanets = planets.filter((planet) => (planet.name).includes(filterByName) === true
      && planet[filterByNumericValues[0].column] < filterByNumericValues[0].quantity);
    break;
  case 'igual a':
    filtPlanets = planets.filter((planet) => (planet.name).includes(filterByName) === true
      && planet[filterByNumericValues[0].column] === filterByNumericValues[0].quantity);
    break;
  default:
    console.log('nenhum selecionado');
  }

  console.log(filtPlanets);
  return (
    <table>
      <Header />
      {
        filtPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))
      }
    </table>
  );
}
