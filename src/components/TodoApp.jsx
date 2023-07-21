import React, { useState } from "react";
import "./styles.css";

const TodoListApp = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasksList([...tasksList, { description: task, isCompleted: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedList = [...tasksList];
    updatedList.splice(index, 1);
    setTasksList(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...tasksList];
    updatedList[index].isCompleted = !updatedList[index].isCompleted;
    setTasksList(updatedList);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div>
        {/* Input and Add Task button */}
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasksList.map((item, index) => (
          <li key={index} className={item.isCompleted ? "completed" : ""}>
            {/* Task description */}
            {item.description}
            <div>
              {/* Finished button */}
              <button onClick={() => toggleComplete(index)}>
                {item.isCompleted ? (
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                ) : (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>

              {/* Delete button */}
              <button onClick={() => removeTask(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
