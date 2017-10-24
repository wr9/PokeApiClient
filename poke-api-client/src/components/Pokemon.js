import React, { Component } from 'react';

class Pokemon extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Name: {this.props.pokemon.name}
                Weight: {this.props.pokemon.weight}
                Height: {this.props.pokemon.height}
            </div>
        );
    }
}

export default Pokemon;