import { PokemonContext } from "./PokemonContext"
import { useContext } from "react";


const Pagecontent = () => {
    const {pokemon, favePokemons, setFavePokemons} = useContext(PokemonContext);

    function Fave(){
        localStorage.setItem("favePokemons", JSON.stringify([...favePokemons, pokemon]));
        setFavePokemons([...favePokemons, pokemon])
    }

    if(pokemon.name != undefined && pokemon.name != " "){
    return (
        <div className="page-content">
            <div className="pokemonName">
                <h2> {pokemon.name}</h2>
                { !(favePokemons.some(favePokemon => favePokemon.name === pokemon.name)) &&
                <a onClick={() => Fave()} > <img style={{ width: 40, height: 40 }} src="images/Fave.png" /> </a> }
            </div>
                <p>{pokemon.type}</p>
                <img src = {pokemon.sprite} />
        </div>
      );}

      if(pokemon.name === undefined){                
        return (
            <div className="page-content">
                <div className="pokemonName">
                    <h2>{"A pokémon nem található"}</h2>
                </div>
                    <p>{"Keress rá egy pokémonra a kereső segítségével"}</p>
                <div className="photo">
                    <img src = "/images/Pokemon-not-found.png"/>
                </div>
            </div>
          );}
}
 
export default Pagecontent;