import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeResultsList extends Component {
    
    render() {
        return (
            <div>
                <h2>Pokemon</h2>
                {this.props.pokemon.length > 0 &&
                    this.props.pokemon.map((pokemon) =>
                        <div key={pokemon.id}>
                            < Pokemon pokemon={pokemon} />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default PokeResultsList;