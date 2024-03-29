import React, { Component } from 'react';

import PokeResultsList from './components/PokeResultsList';
import FiltersMenu from './components/FiltersMenu';
import GroupsMenu from './components/GroupsMenu';

import FetchingService from './services/FetchingService';
import FilteringService from './services/FilteringService';
import Filters from './predefined/Filters';
import Groups from './predefined/Groups';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { pokemon: [], filters: Filters.filters, groups: Groups.groups };
    this.handleChange = this.handleChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
  }

  componentDidMount() {
    let promises = [];

    promises.push(FetchingService.getRandomPokemon());
    promises.push(FetchingService.fetchTypes());
    promises.push(FetchingService.fetchMoves());

    Promise.all(promises).then(response => {
      let pokemon = response[0];
      let types = response[1];
      let moves = response[2];

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

  handleChange(changedFilter, changedOption, value) {
    changedOption.value = value;
    this.setState({ filters: this.state.filters, groups: this.checkSelectedGroups(changedFilter) });
  }

  handleGroupChange(changedGroup) {
    changedGroup.selected = !changedGroup.selected;

    let filters = this.state.filters;
    changedGroup.filters.forEach(groupFilter => {
      let filterIndex = filters.findIndex(filter => filter.label === groupFilter.label);
      groupFilter.options.forEach(groupFilterOption => {
        let optionIndex = filters[filterIndex].options.findIndex(option => option.label === groupFilterOption.label);
        filters[filterIndex].options[optionIndex].value = changedGroup.selected && groupFilterOption.value;
      })
    })

    this.setState({ filters: filters, groups: this.state.groups });
  }

  checkSelectedGroups(changedFilter) {
    let groups = this.state.groups;

    groups.filter(group => group.selected && group.filters.some(filter => filter.label === changedFilter.label)).forEach(group => {
      let groupFilterIndex = group.filters.findIndex(filter => filter.label === changedFilter.label);
      group.filters[groupFilterIndex].options.forEach(option => {
        if (option.value != changedFilter.options.find(filterOption => filterOption.label === option.label).value) {
          group.selected = false;
        }
      })
    })

    return groups;
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
        {this.state.pokemon.length > 0 ?
          <div>
            <div style={{ float: 'left' }}>
              <GroupsMenu groups={this.state.groups} handleChange={this.handleGroupChange} />
              <FiltersMenu filters={this.state.filters} handleChange={this.handleChange} />
            </div>
            <div style={{}}>
              <PokeResultsList pokemon={this.filterPokemon(this.state.pokemon)} />
            </div>
          </div>
          :
          <h2>Loading</h2>
        }

      </div>
    );
  }
}

export default App;