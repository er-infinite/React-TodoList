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
                <CreateTodo createTask={this.createTask.bind(this)}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />

            </div>
        );
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    // When user creates task, it will be added to task list (todos)
    // and automatically set to not done (isCompleted:false)
    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos});
    }
}


