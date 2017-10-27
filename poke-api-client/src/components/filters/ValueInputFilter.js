import React, { Component } from 'react';

class ValueInputFilter extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(option, event) {
        let changedValue = event.target.value;
        this.props.handleChange(this.props.filter, option, changedValue);
    }

    render() {
        return (
            <div>
                <h2>{this.props.filter.name}</h2>

                {this.props.filter.options.map((option) =>
                    <div key={option.label}>
                        <div>
                            <input
                                type="number"
                                value={option.value}
                                placeholder={option.placeholder}
                                onChange={event => this.handleChange(option, event)} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ValueInputFilter;