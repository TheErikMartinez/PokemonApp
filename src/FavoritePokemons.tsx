import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { Grid } from "@ui5/webcomponents-react";

const FavoritePokemons = () => {
    const {favePokemons} = useContext(PokemonContext);

    return ( 
      <Grid
      defaultSpan="XL3 L3 M2 S4"
      position="Center"
      style={{padding: "15px"}}>
      {favePokemons.map((favePok, index) => <div key={index} className="favoritePokes"> 
        <h1>{favePok.name}</h1>
        <p>{favePok.type}</p>
        <img src = {favePok.sprite} />
    </div>)}
</Grid>
     );
}
 
export default FavoritePokemons ;