import React, { Component } from 'react';

import PokeResultsList from './components/PokeResultsList';
import FiltersMenu from './components/FiltersMenu';

import FetchingService from './FetchingService'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let filters = [
      {
        label: 'weight',
        min: '',
        max: ''
      }
    ]

    this.state = { pokemon: [], filters: filters }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    FetchingService.getRandomPokemon()
      .then(response => {
        this.setState({ pokemon: response })
      })
  }

  handleChange(changedFilter) {
    let filters = JSON.parse(JSON.stringify(this.state.filters));
    let changedFilterIndex = filters.findIndex(filter => filter.label === changedFilter.label)
    filters[changedFilterIndex] = changedFilter;
    this.setState({filters: filters});
  }

  render() {
    return (
      <div>
        <FiltersMenu filters={this.state.filters} handleChange={this.handleChange} />
        <PokeResultsList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
