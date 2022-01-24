import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <div className="pokedex">
      {pokemons.map((each) => <Pokemon pokemon={each} />)}
      </div>
    </div>
  );
}

export default App;
