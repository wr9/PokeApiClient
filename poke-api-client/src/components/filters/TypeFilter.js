import React, { Component } from 'react';

class TypeFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        let changedOptionIndex = filter.options.findIndex(option => option.name === event.target.value);
        filter.options[changedOptionIndex].selected = !filter.options[changedOptionIndex].selected;
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>Types</h2>

                {this.props.filter &&
                    this.props.filter.options.map((option) =>
                        <div key={option.name}>
                            <div>
                                <input
                                    type="checkbox"
                                    value={option.name}
                                    checked={option.selected}
                                    onChange={this.handleChange} />
                                {option.name}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default TypeFilter;