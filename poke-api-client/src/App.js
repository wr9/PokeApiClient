import React, { Component } from 'react';
import PokeResultsList from './components/PokeResultsList';
import FetchingService from './FetchingService'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { pokemon: [] }
  }

  componentDidMount() {
    FetchingService.getRandomPokemon()
      .then(response => {
        this.setState({ pokemon: response })
      })
  }

  render() {
    return (
      <div>
        <PokeResultsList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
