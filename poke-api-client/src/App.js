import React, { Component } from 'react';

import PokeResultsList from './components/PokeResultsList';
import FiltersMenu from './components/FiltersMenu';
import GroupsMenu from './components/GroupsMenu';

import FetchingService from './services/FetchingService';
import FilteringService from './services/FilteringService';

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
      },
      {
        label: 'numberOfMoves',
        options: {
          minNumberOfMoves: '',
        },
        filter: FilteringService.filterByNumberOfMoves
      }
    ]

    let groups = [
      {
        label: 'small',
        filters: [
          {
            label: 'height',
            options: [
              {
                name: 'max',
                value: 80
              }
            ]
          },
        ],
        selected: false
      }
    ]

    this.state = { pokemon: [], filters: filters, groups: groups };
    this.handleChange = this.handleChange.bind(this);
  }

  handleGroup

  componentDidMount() {
    console.log('mounting');
    let promises = [];

    promises.push(FetchingService.getRandomPokemon());
    promises.push(FetchingService.fetchTypes());
    promises.push(FetchingService.fetchMoves());

    Promise.all(promises).then(response => {
      let pokemon = response[0];
      let types = response[1].results.map(type => {
        return {
          name: type.name,
          selected: false
        }
      });
      let moves = response[2].results.map(move => {
        return {
          name: move.name,
          selected: false
        }
      });

      let filters = this.state.filters;
      filters.push({
        label: 'type',
        options: types,
        filter: FilteringService.filterByType
      });
      filters.push({
        label: 'moves',
        options: moves,
        filter: FilteringService.filterByMoves
      });

      this.setState({ pokemon: pokemon, filters: filters });
    })
  }

  handleChange(changedFilter) {
    let filters = this.state.filters;
    let changedFilterIndex = filters.findIndex(filter => filter.label === changedFilter.label);
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
        <GroupsMenu groups={this.state.groups}/>
        <FiltersMenu filters={this.state.filters} handleChange={this.handleChange} />
        <PokeResultsList pokemon={this.filterPokemon(this.state.pokemon)} />
      </div>
    );
  }
}

export default App;
