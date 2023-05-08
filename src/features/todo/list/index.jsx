import React from "react";

import TodoFooter from "../footer";
import "./todoList.css";

function TodoList({ todos, updateStatus }) {
  const numberOfIncompletedTasks = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateStatus(todo.id)}
              key={todo.id}
              data-testid="todo-item"
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompletedTasks} />
      </div>
    </div>
  );
}

export default TodoList;
