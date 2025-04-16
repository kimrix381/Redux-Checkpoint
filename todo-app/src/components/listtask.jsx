import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./task.jsx";
import { setFilter } from "../redux/tasksslice.js";

const ListTask = () => {
  const { list, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = list.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("done"))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter("not"))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
