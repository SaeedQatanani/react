import './App.css';
import Home from './components/Home';
import Stringnum from './components/Stringnum';
import {Router} from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Stringnum path="/:variable"/>
      </Router>
    </div>
  );
}

export default App;
