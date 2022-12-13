import { useState } from 'react';
import './App.css';
import TabForm from './components/TabForm';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskManger = task => {
    setTasks(tasks.concat(task));
  }

  const editTasks = tasks => {
    setTasks(tasks);
  }
  return (
    <div className="App">
      <TabForm taskManger={ taskManger }/>
      <Task showTasks={ tasks } updateTasks={ editTasks }/>
    </div>
  );
}

export default App;
