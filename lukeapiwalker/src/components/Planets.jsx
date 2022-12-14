import React from 'react'

const Planets = (props) => {
  return (
    props.planet.name?
    <div>
    <h1>{props.planet.name}</h1>
    <ul>
        <li><strong>Climate: </strong>{props.planet.climate}</li>
        <li><strong>Terrain: </strong>{props.planet.terrain}</li>
        <li><strong>Surface Water: </strong>{props.planet.surface_water}</li>
        <li><strong>Population: </strong>{props.planet.population}</li>
    </ul>
    </div>
    :
    <div>
        <h1>Try to search here or wait!!</h1>
    </div>
  )
}

export default Planets