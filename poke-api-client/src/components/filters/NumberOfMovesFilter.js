import React, { Component } from 'react';

class NumberOfMovesFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        filter.options[event.target.name] = parseInt(event.target.value);
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>Number of moves</h2>

                <input type='number' name='minNumberOfMoves' value={this.props.filter.options.minNumberOfMoves} onChange={this.handleChange} placeholder='min number of moves' />

            </div>
        );
    }
}

export default NumberOfMovesFilter;