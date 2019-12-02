import React from 'react';

 const TodoForm = props =>{
    return (
        <form>
          <input
            onChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="add todo here"
            
          />
          <button onClick={props.handleAddTodo}>Add Todo</button>
          <button onCLick={props.handleClearTodos}>Clear Completed</button>
        </form>
      );
    };


export default TodoForm;
