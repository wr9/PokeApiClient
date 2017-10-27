import React, { Component } from 'react';
import ValueInputFilter from './filters/ValueInputFilter';
import TypeFilter from './filters/TypeFilter';
import MovesFilter from './filters/MovesFilter';

class FiltersMenu extends Component {

    render() {
        return (
            <div>
                <h1>Filters</h1>

                <ValueInputFilter filter={this.props.filters.find(filter => filter.label === 'weight')} handleChange={this.props.handleChange}/>
                <ValueInputFilter filter={this.props.filters.find(filter => filter.label === 'height')} handleChange={this.props.handleChange}/>
                <TypeFilter filter={this.props.filters.find(filter => filter.label === 'type')} handleChange={this.props.handleChange}/>
                <MovesFilter filter={this.props.filters.find(filter => filter.label === 'moves')} handleChange={this.props.handleChange}/>
                <ValueInputFilter filter={this.props.filters.find(filter => filter.label === 'numberOfMoves')} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default FiltersMenu;