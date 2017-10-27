import React, { Component } from 'react';
import WeightFilter from './filters/WeightFilter';
import HeightFilter from './filters/HeightFilter';
import TypeFilter from './filters/TypeFilter';
import NumberOfMovesFilter from './filters/NumberOfMovesFilter';
import MovesFilter from './filters/MovesFilter';

class FiltersMenu extends Component {

    render() {
        console.log('rendering')
        return (
            <div>
                <h1>Filters</h1>

                <WeightFilter filter={this.props.filters.find(filter => filter.label === 'weight')} handleChange={this.props.handleChange}/>
                <HeightFilter filter={this.props.filters.find(filter => filter.label === 'height')} handleChange={this.props.handleChange}/>
                <TypeFilter filter={this.props.filters.find(filter => filter.label === 'type')} handleChange={this.props.handleChange}/>
                <NumberOfMovesFilter filter={this.props.filters.find(filter => filter.label === 'numberOfMoves')} handleChange={this.props.handleChange}/>
                <MovesFilter filter={this.props.filters.find(filter => filter.label === 'moves')} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default FiltersMenu;