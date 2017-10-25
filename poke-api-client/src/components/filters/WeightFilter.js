import React, { Component } from 'react';

class WeightFilter extends Component {

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
                <h2>Weight</h2>
                
                <input type='number' name='min' value={this.props.filter.options.min} onChange={this.handleChange} placeholder='min weight' />
                <input type='number' name='max' value={this.props.filter.options.max} onChange={this.handleChange} placeholder='max weight' />
            </div>
        );
    }
}

export default WeightFilter;