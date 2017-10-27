import React, { Component } from 'react';

class TypeFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        let changedOptionIndex = filter.options.findIndex(option => option.label === event.target.value);
        filter.options[changedOptionIndex].value = !filter.options[changedOptionIndex].value;
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>Types</h2>

                {this.props.filter &&
                    this.props.filter.options.map((option) =>
                        <div key={option.label}>
                            <div>
                                <input
                                    type="checkbox"
                                    value={option.label}
                                    checked={option.value}
                                    onChange={this.handleChange} />
                                {option.label}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default TypeFilter;