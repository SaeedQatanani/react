import React from 'react'

const People = (props) => {
  return (
    props.person.name?
    <div>
        <h1>{props.person.name}</h1>
        <ul>
            <li><strong>Height: </strong>{props.person.height} cm</li>
            <li><strong>Mass: </strong>{props.person.mass} kg</li>
            <li><strong>Hair Color: </strong>{props.person.hair_color}</li>
            <li><strong>Skin Color: </strong>{props.person.skin_color}</li>
        </ul>
    </div>
    :
    <div>
        <h1>Try to search here or wait!!</h1>
    </div>
  )
}

export default People