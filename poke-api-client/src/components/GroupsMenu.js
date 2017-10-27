import React, { Component } from 'react';

class GroupsMenu extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let changedGroupIndex = this.props.groups.findIndex(group => group.name === event.target.name);
        this.props.handleChange(this.props.groups[changedGroupIndex]);
    }

    render() {
        return (
            <div>
                <h1>Groups</h1>

                <div style={{maxWidth: '80%'}}>
                    {this.props.groups.length > 0 &&
                        this.props.groups.map((group) =>
                            <button key={group.name} name={group.name} style={group.selected ? { color: 'red' } : {}} onClick={this.handleChange}>{group.name}</button>
                        )}
                </div>

            </div>
        );
    }
}

export default GroupsMenu;