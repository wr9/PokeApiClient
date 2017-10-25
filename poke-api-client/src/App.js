import React, { Component } from 'react';

import PokeResultsList from './components/PokeResultsList';
import FiltersMenu from './components/FiltersMenu';

import FetchingService from './FetchingService'
import FilteringService from './FilteringService'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let filters = [
      {
        label: 'weight',
        options: {
          min: '',
          max: ''
        },
        filter: FilteringService.filterByWeight
      }
    ]

    this.state = { pokemon: [], filters: filters }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    FetchingService.getRandomPokemon()
      .then(response => {
        this.setState({ pokemon: response })
      })
  }

  handleChange(changedFilter) {
    let filters = JSON.parse(JSON.stringify(this.state.filters));
    let changedFilterIndex = filters.findIndex(filter => filter.label === changedFilter.label)
    filters[changedFilterIndex] = changedFilter;
    this.setState({ filters: filters });
  }

  filterPokemon() {
    let filteredPokemon = this.state.pokemon;
    this.state.filters.forEach(filter => {
      filteredPokemon = filter.filter(filteredPokemon, filter.options);
    })
    return filteredPokemon;
  }

  render() {
    return (
      <div>
        <FiltersMenu filters={this.state.filters} handleChange={this.handleChange} />
        <PokeResultsList pokemon={this.filterPokemon(this.state.pokemon)} filters={this.state.filters} />
      </div>
    );
  }
}

export default App;
