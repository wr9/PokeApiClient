import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeResultsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                {this.props.pokemon.length &&
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