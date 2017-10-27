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
      let types = response[1].results.map(type => {
        return {
          label: type.name,
          value: false
        }
      });
      let moves = response[2].results.map(move => {
        return {
          label: move.name,
          value: false
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
    this.checkSelectedGroups(changedFilter);
    this.setState({ filters: filters });
  }

  handleGroupChange(changedGroup) {
    let groups = this.state.groups;
    let changedGroupIndex = groups.findIndex(group => group.name === changedGroup.name);
    groups[changedGroupIndex].selected = !groups[changedGroupIndex].selected;

    let filters = this.state.filters;
    changedGroup.filters.forEach(groupFilter => {
      let filterIndex = filters.findIndex(filter => filter.label === groupFilter.label);
      groupFilter.options.forEach(groupFilterOption => {
        let optionIndex = filters[filterIndex].options.findIndex(option => option.label === groupFilterOption.label);
        filters[filterIndex].options[optionIndex].value = changedGroup.selected && groupFilterOption.value;
      })
    })

    this.setState({ filters: filters, groups: groups });
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
        <div style={{ float: 'left' }}>
          <GroupsMenu groups={this.state.groups} handleChange={this.handleGroupChange} />
          <FiltersMenu filters={this.state.filters} handleChange={this.handleChange} />
        </div>
        <div style={{}}>
          <PokeResultsList pokemon={this.filterPokemon(this.state.pokemon)} />
        </div>
      </div>
    );
  }
}

export default App;