import React from 'react';

export default class TodoListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };
    }
    //Styling to do tasks. If completed = green, if not completed = red.
    renderTaskSection(){
        const {task, isCompleted} = this.props;

        // console.log(this.props); //debugging tasks and checking if it's toggling

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing){
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            )
        }

        return(
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing){
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }


    render(){
        return(
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick(){
        this.setState({ isEditing: true});
    }

    onCancelClick(){
        this.setState({ isEditing: false});
    }

    // pass in old task and new task
    onSaveClick(event){
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false});
    }

}
