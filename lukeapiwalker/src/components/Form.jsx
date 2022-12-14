import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [type, setType] = useState('people');
    const [id, setId] = useState();
    
    const handelForm = (e) => {
        e.preventDefault();
        props.getData(type, id);
    }
  return (
    <div style={{margin:'5% auto'}}>
        <form onSubmit={handelForm}>
            <label htmlFor='p'>Search for: </label>
            <select id='p' onChange={e=> setType(e.target.value)}>
                <option>people</option>
                <option>planets</option>
            </select>
            <label htmlFor='id'>ID: </label>
            <input type='text' id='id' onChange={e=> setId(e.target.value)}/>
            <input type='submit' value='Search'/>
        </form>
    </div>
  )
}

export default Form