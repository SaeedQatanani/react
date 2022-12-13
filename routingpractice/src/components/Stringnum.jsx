import React from 'react'

const Stringnum = (props) => {
  return (
    <div>
        <h1>{isNaN(props.variable)? <span>The word is: {props.variable}</span>: <span>The number is: {props.variable}</span>}</h1>
    </div>
  )
}

export default Stringnum