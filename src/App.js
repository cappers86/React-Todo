import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state ={
      
      todos: [
   {
     id: 1,
    task: 'Walk dog',
    completed: false
   },
   {
     id: 2,
     task: 'Feed dog',
     completed: false
   },
   {
     id: 3,
     task: 'Clean dishes',
     completed: false
   }

 ],

 todo: ''
    };
  }
  
  
  
  
  
  render() {
    return (
      <div>
         <div>
        <TodoList
          todos={this.state.todos}
          handleToggleComplete={this.toggleTodoComplete}
          
        />
        </div>
       
      
        
      </div>
    );
  }
}

export default App;
