import {useState, useContext} from "react";
import { Button, Input } from "@ui5/webcomponents-react";
import axios from "axios";
import { PokemonContext } from "./PokemonContext";

const Searchbar = () => {
    const [pokemonName, setPokemonName] = useState("")
    const {setPokemon} = useContext(PokemonContext);

     async function getPokemon() {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase())

        setPokemon({name: res.data.name.charAt(0).toUpperCase()+res.data.name.slice(1),
                    type: res.data.types["0"].type.name.charAt(0).toUpperCase()+res.data.types["0"].type.name.slice(1),
                    sprite: res.data.sprites.other["official-artwork"].front_default})
                    console.log(res) // Console log, delete for task pres
      } catch {
        setPokemon({name: "A Pokémon nem található",
                    type: "Keress rá egy Pokémonra a kereső segítségével",
                    sprite: "images/Pokemon-not-found.png"})
      }
    }

    const handleChange = (value: string) => {
      console.log(value) // Console log, delete for task pres
        setPokemonName(value);
      };

    return ( 
      <div>
        <div className="input-wrapper">
          <Input 
            onInput={(e) => handleChange(e.target.value!)}
            onChange={() => getPokemon()} //Enternel mukodik
          />
          <Button icon="search" onClick={() => getPokemon()} />
      </div>
    </div>);
}
 

export default Searchbar;