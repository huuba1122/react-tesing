import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders, setupStore } from "@src/setupTest";
import { addTodo, updateTodoStatus } from "../todoSlice";

import Todo from "..";

describe("Todo intergration test", () => {
  const addTasks = (tasks) => {
    tasks.forEach((task) => {
      const inputEl = screen.getByPlaceholderText(/add a new task/i);
      fireEvent.change(inputEl, { target: { value: task } });
      const addBtnEl = screen.getByRole("button", { name: /add/i });
      fireEvent.click(addBtnEl);
    });
  };

  it("should render exactly the tasks added", () => {
    renderWithProviders(<Todo />);
    addTasks(["Hello"]);
    const taskEl = screen.getByText(/hello/i);
    expect(taskEl).toBeInTheDocument();

    // one task
    const taksListEl = screen.getAllByTestId("todo-item");
    expect(taksListEl.length).toBe(1);

    // mutiple tasks
    addTasks(["task 2", "task 3"]);
    const newTasksEl = screen.getAllByTestId("todo-item");
    expect(newTasksEl.length).toBe(3);
  });

  it("should render the amount of tasks added", () => {
    renderWithProviders(<Todo />);

    addTasks(["task 2", "task 3"]);
    const numberOfTasksEl = screen.getByText(/2 tasks/i);
    // screen.debug();
    expect(numberOfTasksEl).toBeInTheDocument();
  });

  it("should completed task when the task is clicked", () => {
    renderWithProviders(<Todo />);
    const labelTasks = ["task 1", "task 2", "task 3"];
    addTasks(labelTasks);
    const firstTaskEl = screen.getByText(labelTasks[0]);
    fireEvent.click(firstTaskEl);

    expect(firstTaskEl).toHaveClass("todo-item-active");
  });

  it("should render todo item with preloadedState", () => {
    const initialTodos = [{ id: 1, task: "task 1", completed: false }];
    renderWithProviders(<Todo />, { preloadedState: { todo: initialTodos } });

    const todoItemEl = screen.getByText(/task 1/i);
    expect(todoItemEl).toBeInTheDocument();

    const numberOfTasksEl = screen.getByText(/1 task/i);
    expect(numberOfTasksEl).toBeInTheDocument();
  });

  it("add todo item with actions", () => {
    const store = setupStore();
    store.dispatch(addTodo({ id: 1, task: "Say hello", completed: false }));

    renderWithProviders(<Todo />, { store });
    const todoItemEl = screen.getByText(/say hello/i);
    expect(todoItemEl).toBeInTheDocument();
  });
});
