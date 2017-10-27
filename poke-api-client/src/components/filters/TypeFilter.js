import React, { Component } from 'react';

class TypeFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(option) {
        this.props.handleChange(this.props.filter, option, !option.value);
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
                                    onChange={() => this.handleChange(option)} />
                                {option.label}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default TypeFilter;