import React, { Component } from 'react';

class Pokemon extends Component {

    render() {
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
            </div>
        );
    }
}

export default Pokemon;