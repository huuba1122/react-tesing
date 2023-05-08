import { render, screen, fireEvent } from "@testing-library/react";

import TodoForm from "../form";
const addTodoMock = vi.fn();

describe("TodoForm", () => {
  it("should input is empty value when init", () => {
    render(<TodoForm />);

    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputEl.value).toBe("");
  });

  it("should able to type into input", () => {
    render(<TodoForm />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.click(inputEl);
    fireEvent.change(inputEl, { target: { value: "Hello" } });
    expect(inputEl.value).toBe("Hello");
  });

  it("should be able to call add action when clicked add button", () => {
    render(<TodoForm addTodo={addTodoMock} />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Hello" } });
    const addBtnEL = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addBtnEL);
    expect(addTodoMock).toBeCalledTimes(1);
  });

  it("should have empty input when add button clicked", () => {
    render(<TodoForm addTodo={addTodoMock} />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Hello" } });
    const addBtnEL = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addBtnEL);
    expect(inputEl.value).toBe("");
  });
});
