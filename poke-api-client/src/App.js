import React, { Component } from 'react';

import PokeResultsList from './components/PokeResultsList';
import FiltersMenu from './components/FiltersMenu';

import FetchingService from './services/FetchingService'
import FilteringService from './services/FilteringService'

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
      },
      {
        label: 'height',
        options: {
          min: '',
          max: ''
        },
        filter: FilteringService.filterByHeight
      }
    ]

    this.state = { pokemon: [], filters: filters }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    let promises = [];

    promises.push(FetchingService.getRandomPokemon());
    promises.push(FetchingService.fetchTypes());

    Promise.all(promises).then(response => {
      let pokemon = response[0];
      let types = response[1].results.map(type => {
        return {
          name: type.name,
          selected: false
        }
      });

      let filters = this.state.filters;
      filters.push({
        label: 'type',
        options: types,
        filter: FilteringService.filterByType
      })

      this.setState({ pokemon: pokemon, filters: filters })
    })
  }

  handleChange(changedFilter) {
    let filters = this.state.filters
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
        <PokeResultsList pokemon={this.filterPokemon(this.state.pokemon)} />
      </div>
    );
  }
}

export default App;
