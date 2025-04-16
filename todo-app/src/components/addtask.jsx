import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksslice.js";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded"
        placeholder="Add a task"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
