import React, { useState } from "react";
import { v4 } from "uuid";

import "./todoForm.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (!todo) return;
    addTodo({
      id: v4(),
      task: todo,
      completed: false,
    });
    setTodo("");
  };

  const handleKeyUp = (event) => {
    const { keyCode } = event;
    const enterPress = 13;
    if (keyCode === enterPress) {
      handleAddTodo();
    }
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
        onKeyUp={handleKeyUp}
      />
      <button className="add-btn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
