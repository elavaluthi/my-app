import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TaskBar() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = { title: newTask, order: tasks.length };
    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => setTasks([...tasks, data]))
      .catch((error) => console.error(error));
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:8080/api/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) => console.error(error));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = [...tasks];
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(
      reorderedTasks.map((task, index) => ({ ...task, order: index }))
    );

    fetch(`http://localhost:8080/api/tasks/${removed._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: result.destination.index }),
    }).catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {task.title}
                    <button onClick={() => handleDeleteTask(task._id)}>
                      Delete
                    </button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      
    </DragDropContext>
    </div>
  );
}

export default TaskBar;