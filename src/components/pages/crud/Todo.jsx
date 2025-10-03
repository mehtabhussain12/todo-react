import React, { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };
function deleteTask(index) {
   let updatedTasks = [...tasks];  
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks);   
}
function editTask(index) {
    let updateTasks = [...tasks]
    let splice = updateTasks.splice(index, 1, prompt("Edit Task", updateTasks[index]))
    setTasks(updateTasks)
}
    return (
        <>
            <div>
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Add a new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul>
                    {tasks.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                                <button onClick={() => deleteTask(index)}>D</button>
                                  <button onClick={() => editTask(index)}>Edit</button>
                            </li>
                        );
                    })}
                </ul>
        
            </div>

        </>
    )
}

export default Todo