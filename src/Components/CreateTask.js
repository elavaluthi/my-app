import React, { useState } from "react";

function CreateTask(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, description, category };
    props.onAdd(newTask);
    setName("");
    setDescription("");
    setCategory("todo");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    setCategory(data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-task">
      <form onSubmit={handleSubmit} onDrop={handleDrop} onDragOver={handleDragOver}>
        <label>
          Task Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
