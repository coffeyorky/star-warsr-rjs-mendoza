import './App.css';
import NavBar from "./components/NavBar";
import ItemListC from "./components/ItemListContainer"

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <NavBar menu="Wookie Tienda" />
       <ItemListC />
      </header>
    </div>
  );
}

export default App;
