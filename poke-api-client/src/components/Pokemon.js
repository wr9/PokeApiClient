import React, { Component } from 'react';

class Pokemon extends Component {

    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                <h3>Name: {this.props.pokemon.name}</h3>
                <div>Weight: {this.props.pokemon.weight}</div>
                <div>Height: {this.props.pokemon.height}</div>
                <div>
                    Types:
                {this.props.pokemon.types.map( type =>
                    <span key={type}>
                        {type + ' '}
                    </span>
                )}
                </div>
                <div>No of moves: {this.props.pokemon.moves.length}</div>
                <div>
                    Moves:
                {this.props.pokemon.moves.map( move =>
                    <span key={move}>
                        {move + ' '}
                    </span>
                )}
                </div>
            </div>
        );
    }
}

export default Pokemon;