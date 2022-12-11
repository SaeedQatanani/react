import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");
    const [dimension, setDimension] = useState(0);
    const handelForm = e => {
        e.preventDefault();
        props.colorFun(color, dimension);
        setDimension("");
    }
  return (
    <div>
        <form onSubmit={ handelForm }>
            <p>Color: <input type="color" onChange={e => setColor(e.target.value)}/></p>
            <p>Dimension: <input type="text" onChange={e => setDimension(e.target.value)} value={dimension}/></p>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default Form