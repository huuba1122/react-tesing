import { selectTodos, selectTodosCompleted } from "../todoSlice";

const state = {
  todo: [
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
    { id: 3, task: "task 3", completed: false },
  ],
};
describe("Todo selectors", () => {
  it("should return all of task", () => {
    const expected = [
      { id: 1, task: "task 1", completed: false },
      { id: 2, task: "task 2", completed: true },
      { id: 3, task: "task 3", completed: false },
    ];

    expect(selectTodos(state)).toEqual(expected);
  });

  it("should return all of task have been completed", () => {
    const expected = [{ id: 2, task: "task 2", completed: true }];

    expect(selectTodosCompleted(state)).toEqual(expected);
  });
});
