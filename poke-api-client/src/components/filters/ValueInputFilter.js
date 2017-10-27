import React, { Component } from 'react';

class ValueInputFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        let changedOptionIndex = filter.options.findIndex(option => option.label === event.target.name);
        filter.options[changedOptionIndex].value = event.target.value;
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>{this.props.filter.label}</h2>

                {this.props.filter.options.map((option) =>
                    <div key={option.label}>
                        <div>
                            <input
                                type="number"
                                name={option.label}
                                value={option.value}
                                placeholder={option.placeholder}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ValueInputFilter;