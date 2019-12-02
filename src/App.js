import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import Todoform from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

// const data = [
//   {
//     id: 1,
//     task: 'Walk dog',
//     completed: false
//   },
//   {
//     id: 2,
//     task: 'Feed dog',
//     completed: false
//   },
//   {
//     id: 3,
//     task: 'Clean dishes',
//     completed: false
//   }

// ];






class App extends React.Component {
  constructor() {
    super();
    this.state ={
      itemList: ''
    }
  }


addItem = itemName => {
  this.setState({
    itemList:[
      ...this.state.itemList,
      {
        task: itemName,
        id: Date.now(),
        completed: false
      }
    ]
    });
};

render() {
  return (
    <div>
      <h1>Todo app</h1>
      <Todoform addItem={this.addItem} />
    </div>
  );

  
}

}
export default App;