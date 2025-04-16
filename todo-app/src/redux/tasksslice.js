import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all",
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(description) {
        return {
          payload: {
            id: nanoid(),
            description,
            isDone: false,
          },
        };
      },
    },
    toggleDone(state, action) {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask(state, action) {
      const { id, newDescription } = action.payload;
      const task = state.list.find((t) => t.id === id);
      if (task) task.description = newDescription;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleDone, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
