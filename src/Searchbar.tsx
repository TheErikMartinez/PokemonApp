import {useEffect, useState, useContext} from "react";
import { Button, Input } from '@ui5/webcomponents-react';
import axios from "axios";
import { PokemonContext } from "./PokemonContext";

const Searchbar = () => {
    const [input, setInput] = useState('')
    // const [name, setName] = useState('')
    // const [type, setType] = useState('')
    // const [sprite, setSprite] = useState('')
    const {setName, setType, setSprite} = useContext(PokemonContext)
    const {name, type, sprite} = useContext(PokemonContext)

     const getPokemon = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + input.toLowerCase()).then((res)=>console.log( res.data.name, res.data.types["0"].type.name, res.data.sprites.other["official-artwork"].front_default))
       
        
          console.log(name)
          console.log(type)
          console.log(sprite)
     }

     async function fetch() {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + input.toLowerCase());

        setName(res.data.name);
        setType(res.data.types["0"].type.name);
        setSprite(res.data.sprites.other["official-artwork"].front_default);
      } catch {
        setName("");
        setType("");
        setSprite("");
      }
    }

    const handleChange = (value: any) => {
        setInput(value);
      };

     useEffect(() => {
        // axios.get('https://pokeapi.co/api/v2/pokemon/' + input.toLowerCase())
        // .then((res) => { setName(res.data.name), setType(res.data.types["0"].type.name), setSprite(res.data.sprites.other["official-artwork"].front_default) })

        fetch()
       }, [input]);

    return ( 
    <div className="input-wrapper">
       <Input
  onChange={(e) => handleChange(e.target.value)}
/>
        <Button icon="search" onClick={() => getPokemon()} />
    </div>);
}
 

export default Searchbar;