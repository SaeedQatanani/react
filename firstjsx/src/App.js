import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul> */}
      <PersonCard firstName={"Saeed"} lastName={ "Qatanani" } age={ 23 } hairColor={ "Black" }/>
      <PersonCard firstName={"Riyad"} lastName={ "Bantaloni" } age={ 29 } hairColor={ "Black" }/>
      <PersonCard firstName={"Ameer"} lastName={ "Bigdady" } age={ 27 } hairColor={ "Black" }/>
      <PersonCard firstName={"Reina"} lastName={ "Handal" } age={ 25 } hairColor={ "Brown" }/>
    </div>
  );
}

export default App;
