import React from 'react'

const Boxes = (props) => {
  return (
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
        {props.color.map((item,i)=><div key={i} style={{backgroundColor:item, width:props.dimension+"px", height:props.dimension+"px",margin:"1%"}}></div>)}
    </div>
  )
}

export default Boxes