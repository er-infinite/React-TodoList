import React from 'react';

export default class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }

    renderError(){
        if(!this.state.error){ return null;}

        return <div style={{color: 'red'}}>{this.state.error}</div>;
    }

    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="To Do " ref="createInput"/>
                <button>Create</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault()

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        //if validateInput returned a message
        if(validateInput){
            this.setState({error: validateInput});
            return;
        }

        //if no error, reset state to null
        this.setState({error: null});

        // console.log(this.refs.createInput.value);
        // console.log(this.props.createTask); //debugging creating task
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    //If there is no task, then error
    validateInput(task) {
        if (!task) {
            return "Enter a Task";
        } else if (_.find(this.props.todos, todo => todo.task === task)) { //searches todos in form <CreateTodo> app.js
            return "Duplicate Task";
        }else {
            return null; //return null, or no error
        }
    }
}


