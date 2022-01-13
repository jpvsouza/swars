import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Header from './Header';

export default function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(PlanetContext);
  let filtPlanets = planets.filter((planet) => (planet.name).includes(filterByName));

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.map((filtro) => {
      switch (filtro.comparison) {
      case 'maior que':
        filtPlanets = planets.filter((planet) => (planet.name)
          .includes(filterByName) === true
          && Number(planet[filtro.column])
          > Number(filtro.quantity));
        break;
      case 'menor que':
        filtPlanets = planets.filter((planet) => (planet.name)
          .includes(filterByName) === true
          && Number(planet[filtro.column])
          < Number(filtro.quantity));
        break;
      case 'igual a':
        filtPlanets = planets.filter((planet) => (planet.name)
          .includes(filterByName) === true
          && Number(planet[filtro.column])
          === Number(filtro.quantity));
        break;
      default:
        console.log('nenhum filtro numérico selecionado');
      }
      return null;
    });
  }

  return (
    <table>
      <Header />
      {
        filtPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
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
