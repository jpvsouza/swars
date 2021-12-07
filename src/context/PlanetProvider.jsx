import PropTypes from 'prop-types';
import React, { Component } from 'react';
import searchPlanets from '../services/searchData';
import PlanetContext from './PlanetContext';

class PlanetProvider extends Component {
  constructor() {
    super();

    this.state = {
      planetas: [],
    };
  }

  componentDidMount() {
    searchPlanets().then((data) => {
      this.setState({
        planetas: data.results,
      });
    });
  }

  render() {
    const { children } = this.props;
    const { planetas } = this.state;
    return (
      <PlanetContext.Provider value={ planetas }>
        {
          children
        }
      </PlanetContext.Provider>
    );
  }
}

PlanetProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetProvider;
