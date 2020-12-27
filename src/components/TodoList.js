import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todotext || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = id => {
      
  }

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
