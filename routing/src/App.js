import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import Varcheck from './components/Varcheck';
import Colorfultext from './components/Colorfultext';
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Varcheck path="/:var"/>
        <Colorfultext path="/:var/:color/:bcolor"/>
      </Router>
    </div>
  );
}

export default App;
