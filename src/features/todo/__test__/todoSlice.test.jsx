import todoReducer, { addTodo, updateTodoStatus } from "../todoSlice";

describe("todo Slice", () => {
  it("should return initial state", () => {
    expect(todoReducer(undefined, { type: undefined })).toEqual([]);
  });

  it("should a new todo being added to an empty list", () => {
    const previousState = [];
    const newTodo = { id: 1, task: "task 1", completed: false };
    expect(todoReducer(previousState, addTodo(newTodo))).toEqual([newTodo]);
  });

  it("should a new todo being added to an existing list", () => {
    const previousState = [{ id: 1, task: "task 1", completed: true }];
    const newTodo = { id: 2, task: "task 2", completed: false };
    expect(todoReducer(previousState, addTodo(newTodo))).toEqual([
      ...previousState,
      newTodo,
    ]);
  });

  it("should a todo status being updated", () => {
    const oldTodo = { id: 1, task: "task 1", completed: false };
    expect(todoReducer([oldTodo], updateTodoStatus(1))).toEqual([
      { ...oldTodo, completed: true },
    ]);
  });
});
