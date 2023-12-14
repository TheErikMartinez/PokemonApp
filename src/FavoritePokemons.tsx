import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

const FavoritePokemons = () => {
    //const {pokemon, setPokemon} = useContext(PokemonContext);
    const allKeys = Object.keys(localStorage);
    //const [favorites, setFavorites] = useState([]);

    function DisplayFave(){
     //     console.log(pokemon.name)
     //     localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
     //     console.log(JSON.parse(localStorage.getItem(pokemon.name)!))
     allKeys.forEach((key) => {
      //setPokemon()
      console.log(JSON.parse(localStorage.getItem(key)!))
    })

    }
    
    return ( 
        <div>  
        <ul> { allKeys.map(key => <li> {localStorage.getItem(key)} </li>) }</ul>
       </div>
     );
}
 
export default FavoritePokemons ;