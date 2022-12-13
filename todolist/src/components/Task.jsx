import React from 'react'
import { useState } from 'react';

const Task = (props) => {
    const [tasks, setTasks] = useState([]);
    console.log(tasks);
    const handelCheck = (e, item) => {
        item.taskStatus=e.target.checked;
        setTasks(props.showTasks);
        props.updateTasks(tasks);
    }
    const handelDelete = (e, i) => {
        e.preventDefault();
        console.log(i);
    setTasks([
        ...tasks.slice(0, i),
        ...tasks.slice(i + 1)
    ]);
        props.updateTasks(tasks);
    }
  return (
    <div>
        <h2>The to-do list:</h2>
        <ul>
            {props.showTasks.map((item,i)=>{ return(
            <div key={i}>
                <li style={item.taskStatus? {textDecoration:"line-through"}:{textDecoration:"none"}}>{ item.taskContent }
                <input type="checkbox" onChange={(e) => handelCheck(e, item)}/>
                <button onClick={(e) => handelDelete(e, i)}>Delete</button>
                </li>
            </div>)
            })}
        </ul>
    </div>
  )
}

export default Task