import React, { Component } from 'react';

class Pokemon extends Component {

    render() {
        return (
            <div>
                <h3>Name: {this.props.pokemon.name}</h3>
                <div><b>Weight:</b> {this.props.pokemon.weight}</div>
                <div><b>Height:</b> {this.props.pokemon.height}</div>
                <div>
                    <b>Types:</b>
                    {this.props.pokemon.types.map(type =>
                        <span key={type}>
                            {type + ' '}
                        </span>
                    )}
                </div>
                <div><b>Number of moves:</b> {this.props.pokemon.moves.length}</div>
                <div>
                    <b>Moves:</b>
                    {this.props.pokemon.moves.map(move =>
                        <small key={move}>
                            {move + ' '}
                        </small>
                    )}
                </div>
            </div>
        );
    }
}

export default Pokemon;