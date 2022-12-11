import './App.css';
import Tabs from './components/Tabs';
import Details from './components/Details';
import { useState } from 'react';

function App() {
  const arr=[{label:"Ameer",content:"Ameer Bigdady is a front end developer"},{label:"Riyad", content:"Riyad Bantaloni QA developer"}, {label:"Reina", content:"Reina FULL stack developer"}, {label:"Lina", content:"Lina KillAny"}];
  const [tab, setTab] = useState({});
  const assignTab = tab => setTab(tab); 
  return (
    <div className="App">
      <Tabs array={arr} assignTab={ assignTab }/>
      <Details tab= {tab}/>
    </div>
  );
}

export default App;
