import React, { Component } from 'react';

class MovesFilter extends Component {

    constructor(props) {
        super(props);

        this.state = { query: '' };
        this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
        this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
        this.unselectMove = this.unselectMove.bind(this);
    }

    handleAutocompleteChange(event) {
        this.setState({ query: event.target.value });
    }

    handleAutocompleteSelect(option) {
        this.props.handleChange(this.props.filter, option, true);
        this.setState({ query: '' });
    }

    unselectMove(option) {
        this.props.handleChange(this.props.filter, option, false);
    }

    render() {
        return (
            <div>
                <h2>Moves</h2>

                {this.props.filter &&
                    <div>

                        <div>
                            <input value={this.state.query} onChange={this.handleAutocompleteChange} placeholder="move" />
                            {this.state.query &&
                                <div className="dropdown-content">
                                    {this.props.filter.options.filter(move => move.label.includes(this.state.query) && !move.value).map((move) =>
                                        <div key={move.label}>
                                            <div className='dropdown-content-element' onClick={() => this.handleAutocompleteSelect(move)}>
                                                <div>{move.label}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>

                        {this.props.filter.options.filter(move => move.value).length > 0 &&
                            <div>
                                <h3>Selected filters</h3>

                                {this.props.filter.options.filter(move => move.value).map((move) =>
                                    <div key={move.label}>
                                        <div>
                                            <input
                                                type="checkbox"
                                                value={move.label}
                                                checked={move.value}
                                                onChange={() => this.unselectMove(move)} />
                                            {move.label}
                                        </div>
                                    </div>
                                )}
                            </div>
                        }

                    </div>
                }

            </div>
        );
    }
}

export default MovesFilter;