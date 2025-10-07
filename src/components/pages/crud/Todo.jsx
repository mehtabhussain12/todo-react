import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null); 

  const addOrUpdateTask = () => {
    if (newTask.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask(""); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
   
  };

  const editTask = (index) => {
    setNewTask(tasks[index]); 
    setEditIndex(index);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add or edit a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addOrUpdateTask}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>D</button>
              <button onClick={() => editTask(index)}>E</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
