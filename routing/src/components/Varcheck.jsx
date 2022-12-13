import React from 'react'

const Varcheck = (props) => {
  return (
    <div>
        <h1>{isNaN(props.var)? <span>The word is: {props.var}</span>: <span>The number is: {props.var}</span>}</h1>
    </div>
  )
}

export default Varcheck