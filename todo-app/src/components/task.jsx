import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDone, editTask } from "../redux/tasksslice.js";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [desc, setDesc] = useState(task.description);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newDescription: desc }));
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleDone(task.id))}
        />
        {editMode ? (
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border border-gray-300 rounded p-1"
          />
        ) : (
          <span className={task.isDone ? "line-through text-gray-400" : ""}>
            {task.description}
          </span>
        )}
      </div>
      <div>
        {editMode ? (
          <button onClick={handleSave} className="text-green-500">
            Save
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="text-blue-500">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
