import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Saeed" lastName="Qatanani" age={ 23 } hairColor="Black" />
      <PersonCard firstName="Riyad" lastName="Bantaloni" age={ 29 } hairColor="Black" />
      <PersonCard firstName="Ameer" lastName="Bigdady" age={ 27 } hairColor="Black" />
      <PersonCard firstName="Reina" lastName="Handal" age={ 25 } hairColor="Brown" />
      
    </div>
  );
}

export default App;
