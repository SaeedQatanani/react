import React from 'react'

const Colorfultext = (props) => {
  return (
    <div>
        <h1 style={{color:props.color, backgroundColor: props.bcolor}}><span>The word is: {props.var}</span></h1>
    </div>
  )
}

export default Colorfultext