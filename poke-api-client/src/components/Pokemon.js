import React, { Component } from 'react';

class Pokemon extends Component {

    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                Name: {this.props.pokemon.name}
                Weight: {this.props.pokemon.weight}
                Height: {this.props.pokemon.height}
                Types:
                {this.props.pokemon.types.map( type =>
                    <div key={type}>
                        {type}
                    </div>
                )}
                No of moves: {this.props.pokemon.moves.length}
            </div>
        );
    }
}

export default Pokemon;