import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Axiosapi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(0);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemons(response.data.results); setLoaded(true)})
    }, []);
    const showAll = () => {
        setLimit(807);
    }
  return (
    <div>
    <button onClick={showAll}>Fetch All</button>
    <ol>
        {loaded && pokemons.slice(0, limit).map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
    </ol>
    </div>
  )
}

export default Axiosapi