import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    updateTodoStatus: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;

// selectors
export const selectTodos = (state) => state.todo;
export const selectTodosCompleted = createSelector(selectTodos, (items) =>
  items.filter((todo) => todo.completed)
);
