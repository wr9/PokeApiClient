import React, { Component } from 'react';

class HeightFilter extends Component {

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
                <h2>Height</h2>
                
                <input type='number' name='min' value={this.props.filter.options.min} onChange={this.handleChange} placeholder='min height' />
                <input type='number' name='max' value={this.props.filter.options.max} onChange={this.handleChange} placeholder='max height' />
            </div>
        );
    }
}

export default HeightFilter;