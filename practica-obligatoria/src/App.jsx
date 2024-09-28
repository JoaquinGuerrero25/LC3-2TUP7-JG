import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList"; 

function App() {
  const [task, setTask] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      titulo: title,
      completed: false
    };
    setTask([...task, newTask]);
  };

  const deleteTask = (id) => {
    const filteredTask = task.filter(task => task.id !== id);
    setTask(filteredTask);
  };

  const completeTask = (id) => {
    const updateTask = task.map(
      task => task.id === id ? {...task, completed: !task.completed } : task
    );
    setTask(updateTask);
  }; 

  return (
    <>
      <TaskInput addTask={addTask} />
      <TaskList task={task} deleteTask={deleteTask} completeTask={completeTask} />
    </>
  );
}

export default App;