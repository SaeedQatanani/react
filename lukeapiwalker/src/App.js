import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {Router, navigate} from '@reach/router';
import Planets from './components/Planets';
import People from './components/People';
import Form from './components/Form';
import axios from 'axios';

function App() {
  const [type, setType] = useState('');
  const [id, setId] = useState(0);
  const [person, setPerson] = useState({});
  const [planet, setPlanet] = useState({});
  // const [peopleLoaded, setPeopleLoaded] = useState(false);
  // const [planetsLoaded, setPlantesLoaded] = useState(false);
  const getData = (type, id) => {
    setType(type);
    setId(id);
    navigate('/'+type+'/'+id);
  }
  useEffect(() => {
      axios.get('https://swapi.dev/api/'+type+'/'+id)
          .then(response => (type==='people'? setPerson(response.data): setPlanet(response.data)))
  }, [type,id])

  return (
    <div className="App">
      <Form getData={ getData }/>
      <Router>
        <People path="/people/:id" person={person}/>
        <Planets path="/planets/:id" planet={planet}/>
      </Router>
    </div>
  );
}

export default App;
