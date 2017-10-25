import React, { Component } from 'react';
import WeightFilter from './WeightFilter';

class FiltersMenu extends Component {

    render() {
        console.log('rendering')
        return (
            <div>
                <WeightFilter filter={this.props.filters.find(filter => filter.label === 'weight')} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default FiltersMenu;