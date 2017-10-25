import React, { Component } from 'react';

class WeightFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        filter[event.target.name] = event.target.value;
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h1>Weight</h1>
                <input type='number' name='min' value={this.props.filter.min} onChange={this.handleChange} placeholder='min weight' />
                <input type='number' name='max' value={this.props.filter.max} onChange={this.handleChange} placeholder='max weight' />
            </div>
        );
    }
}

export default WeightFilter;