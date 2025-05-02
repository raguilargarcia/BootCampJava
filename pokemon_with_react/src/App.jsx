import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <Router>
      <div className="App">
        <span className="ear left" />
        <span className="ear right" />
        <div className="pokemon__container">
          <Routes>
            <Route path="/" element={<PokemonList />} />
          </Routes>
        </div>
        <span className="cheek left" />
        <span className="cheek right" />
      </div>
    </Router>
  );
}

export default App;
