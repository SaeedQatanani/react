import React from 'react'

const Task = (props) => {

  return (
    <div>
        <h2>The to-do list:</h2>
        <ul>
            {props.showTasks.map((item,i)=>
            <div key={i}>
                <li style={item.taskStatus? {textDecoration:"line-through"}:{textDecoration:"none"}}>{ item.taskContent }
                <input type="checkbox" checked={item.taskStatus} onChange={e => props.updateTasks(i)}/>
                <button onClick={e=>props.delTask(i)}>Delete</button>
                </li>
            </div>)
            }
        </ul>
    </div>
  )
}

export default Task