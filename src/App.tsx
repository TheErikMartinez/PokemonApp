import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import { PokemonContext, PokemonInterface } from './PokemonContext.tsx'
import { useContext, useEffect } from "react";


function App() {
    const {setFavePokemons} = useContext(PokemonContext)

     useEffect(() => {
        const locSto : PokemonInterface[] = JSON.parse(localStorage.getItem("favePokemons")!)
        if(locSto)
            setFavePokemons(locSto)
        
     }, []);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
          </Routes>
      </Router>
  );
}

export default App;
