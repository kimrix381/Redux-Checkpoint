import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksslice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
