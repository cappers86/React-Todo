import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/Todo';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
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

  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.todo,
      completed: false,
      id: Date.now()
    });
    this.setState({ todos, todo: "" });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          handleToggleComplete={this.toggleTodoComplete}
          
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;