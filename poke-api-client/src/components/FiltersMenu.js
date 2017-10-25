import React, { Component } from 'react';
import WeightFilter from './WeightFilter';
import HeightFilter from './HeightFilter';
import TypeFilter from './TypeFilter';

class FiltersMenu extends Component {

    render() {
        console.log('rendering')
        return (
            <div>
                <WeightFilter filter={this.props.filters.find(filter => filter.label === 'weight')} handleChange={this.props.handleChange}/>
                <HeightFilter filter={this.props.filters.find(filter => filter.label === 'height')} handleChange={this.props.handleChange}/>
                <TypeFilter filter={this.props.filters.find(filter => filter.label === 'type')} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default FiltersMenu;