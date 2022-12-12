import React, { useState } from 'react'

const TabForm = (props) => {
    const [content, setContent] = useState("");
    const addTask = e => {
        e.preventDefault();
        const task = {taskContent: content, taskStatus: false};
        props.taskManger(task);
        setContent("");
    }
  return (
    <div>
        <form onSubmit={addTask}>
            <h2>Add a new task to your to-do list:</h2>
            <input type="text" onChange={e => setContent(e.target.value)} value={ content }/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default TabForm