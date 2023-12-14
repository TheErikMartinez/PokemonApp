import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { Grid } from "@ui5/webcomponents-react";
import React from "react";

const FavoritePokemons = () => {
    const {favePokemons} = useContext(PokemonContext);
    const listFavorites = favePokemons.map((favePok) => <div className="favoritePokes"
  > 
    <h1>{favePok.name}</h1>
    <p>{favePok.type}</p>
    <img src = {favePok.sprite} />
  </div>)
    
    return ( 
      <Grid
  className=""
  defaultSpan="XL3 L3 M2 S4"
  position="Center"
>
  <React.Fragment key=".0">
    {listFavorites}
  </React.Fragment>
</Grid>
     );
}
 
export default FavoritePokemons ;