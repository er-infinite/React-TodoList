import React from 'react';

export default class CreateTodo extends React.Component{
    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="To Do " ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault();
        console.log(this.refs.createInput);
    }
}


