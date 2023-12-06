import { PokemonContext } from "./PokemonContext"
import {useContext} from "react";


const Pagecontent = () => {
    const {pokemon} = useContext(PokemonContext);
    return (
        <div className="page-content">
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
            <a><img src = {pokemon.sprite} /></a>
        </div>
      );
}
 
export default Pagecontent;