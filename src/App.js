import './App.css';
import React, { useState } from "react"
import Form from './components/Form'
import NavBar from './components/NavBar';
import Task from './components/Task'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <NavBar/>
      <Form addTask={addTask}/>
      <Task tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
