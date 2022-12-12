import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Api = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(0);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    });
    const showAll = () => {
        setLimit(807);
    }

    return (
        <div>
            <button onClick={showAll}>Show All</button>
            <ol>
                {pokemons.slice(0, limit).map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
            </ol>
        </div>
    )
}

export default Api