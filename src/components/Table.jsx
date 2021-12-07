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
                  <td>{planet.orbit}</td>
                </tr>
              ))
            }
          </table>
        )
      }
    </PlanetContext.Consumer>
  );
}
