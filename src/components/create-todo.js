import React from 'react';

export default class CreateTodo extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="To Do " />
                <button>Create</button>
            </form>
        );
    }
}


