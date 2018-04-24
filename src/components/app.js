// Start of initial app
// Importing react components
import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'Finish Redux Tutorial',
        isCompleted: false
    },
    {
        task: 'Finish Pixel Art Project',
        isCompleted: false
    }
];

export default class App extends React.Component{

    //Goal: Re render when props change
    constructor(props){
        super(props);

        this.state = {
            todos
        }; //sets up state and re-renders components
    }
    render(){
        return(
            <div>
                <h1>React To Do App</h1>
                <CreateTodo />
                <TodoList todos={this.state.todos} />

            </div>
        );
    }
}


