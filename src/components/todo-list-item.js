import React from 'react';

export default class TodoListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection() {

    }


    render(){
        return(
            <tr>
                <td>{this.props.task}</td>
                <td>
                    <button onClick={this.onEditClick.bind(this)}>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        );
    }

    onEditClick(){
        this.setState({ isEditing: true});
    }

}
