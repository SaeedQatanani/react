import { useState } from 'react';
import './App.css';
import TabForm from './components/TabForm';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskManger = task => {
    setTasks([...tasks, task]);
  }

  const editTasks = (id) => {
    const taskToUpdate = tasks.filter((task,i)=>i==id);
    taskToUpdate[0].taskStatus=!taskToUpdate[0].taskStatus;
    setTasks([...tasks]);
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task,i)=>id!=i));
  }
  return (
    <div className="App">
      <TabForm todos={ tasks } taskManger={ taskManger }/>
      <Task showTasks={ tasks } delTask={ deleteTask } updateTasks={ editTasks }/>
    </div>
  );
}

export default App;
