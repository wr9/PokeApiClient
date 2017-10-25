import React, { Component } from 'react';

class MovesFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        filter.options.minCount = parseInt(event.target.value);
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>Moves</h2>
                
                <input type='number' name='minCount' value={this.props.filter.options.minCount} onChange={this.handleChange} placeholder='min number of moves' />
            </div>
        );
    }
}

export default MovesFilter;