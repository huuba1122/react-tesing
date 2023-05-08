import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@src/app/store";
import { selectTodos, addTodo, updateTodoStatus } from "./todoSlice";

import Form from "./form";
import Header from "./header";
import TodoList from "./list";
import "./todo.css";

function Todo() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  const handleUpdateStatus = (todoId) => {
    dispatch(updateTodoStatus(todoId));
  };

  return (
    <div className="todo">
      <Header title="Todo" />
      <Form addTodo={(todo) => dispatch(addTodo(todo))} />
      <TodoList todos={todos} updateStatus={handleUpdateStatus} />
    </div>
  );
}

export default Todo;
