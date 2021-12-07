import React from 'react';
import PlanetContext from '../context/PlanetContext';
import Header from './Header';

export default function Table() {
  return (
    <PlanetContext.Consumer>
      {
        (value) => (
          <table>
            <Header />
            {
              value.map((planet) => (
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
        )
      }
    </PlanetContext.Consumer>
  );
}
