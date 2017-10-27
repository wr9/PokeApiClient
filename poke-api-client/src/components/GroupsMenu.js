import React, { Component } from 'react';

class GroupsMenu extends Component {

    render() {
        return (
            <div>
                <h1>Groups</h1>

                <div style={{maxWidth: '80%'}}>
                    {this.props.groups.length > 0 &&
                        this.props.groups.map((group) =>
                            <button key={group.name} name={group.name} style={group.selected ? { color: 'red' } : {}} onClick={() => this.props.handleChange(group)}>{group.name}</button>
                        )}
                </div>

            </div>
        );
    }
}

export default GroupsMenu;