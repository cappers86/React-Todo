import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import Todoform from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const data = [
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

];






class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;


