import React from "react";
import { Link } from "react-router-dom";

import "./todoFooter.css";

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"}
      </p>
      {/* <Link to="/followers">Followers</Link> */}
    </div>
  );
}

export default TodoFooter;
