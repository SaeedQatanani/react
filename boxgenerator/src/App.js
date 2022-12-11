import './App.css';
import Form from './components/Form';
import Boxes from './components/Boxes';
import { useState } from 'react';

function App() {
  const [propColor, setPropColor] = useState([]);
  const [propDimension, setPropDimension] = useState(0);
  const propLefter = (color,dim) => {
    setPropColor(propColor.concat(color));
    setPropDimension(dim);
  }
  return (
    <div className="App">
      <Form colorFun={ propLefter }/>
      <Boxes color={ propColor } dimension={propDimension}/>
    </div>
  );
}

export default App;
