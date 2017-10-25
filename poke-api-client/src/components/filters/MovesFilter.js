import React, { Component } from 'react';

class MovesFilter extends Component {

    constructor(props) {
        super(props);

        this.state = { query: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
        this.handleAutocompleteSelect = this.handleAutocompleteSelect.bind(this);
        this.unselectMove = this.unselectMove.bind(this);
    }

    handleChange(event) {
        let filter = this.props.filter;
        filter.options.minCount = parseInt(event.target.value);
        this.props.handleChange(filter);
    }

    handleAutocompleteChange(event) {
        this.setState({ query: event.target.value });
    }

    handleAutocompleteSelect(moveName) {
        let filter = this.props.filter;
        let selectedMoveIndex = filter.options.moves.findIndex(move => move.name === moveName);
        filter.options.moves[selectedMoveIndex].selected = true;
        this.props.handleChange(filter);
        this.setState({ query: '' });
    }

    unselectMove(event) {
        let filter = this.props.filter;
        let selectedMoveIndex = filter.options.moves.findIndex(move => move.name === event.target.value);
        filter.options.moves[selectedMoveIndex].selected = false;
        this.props.handleChange(filter);
    }

    render() {
        return (
            <div>
                <h2>Moves</h2>

                {this.props.filter &&
                    <div>
                        <input type='number' name='minCount' value={this.props.filter.options.minCount} onChange={this.handleChange} placeholder='min number of moves' />

                        <div>
                            <input value={this.state.query} onChange={this.handleAutocompleteChange} placeholder="move" />
                            {this.state.query &&
                                <div className="dropdown-content">
                                    {this.props.filter.options.moves.filter(move => move.name.includes(this.state.query) && !move.selected).map((move) =>
                                        <div key={move.name}>
                                            <div className='dropdown-content-element' onClick={() => this.handleAutocompleteSelect(move.name)}>
                                                <div>{move.name}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>

                        {this.props.filter.options.moves.filter(move => move.selected).length > 0 &&
                            <div>
                                <h3>Selected filters</h3>

                                {this.props.filter.options.moves.filter(move => move.selected).map((move) =>
                                    <div key={move.name}>
                                        <div>
                                            <input
                                                type="checkbox"
                                                value={move.name}
                                                checked={move.selected}
                                                onChange={this.unselectMove} />
                                            {move.name}
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