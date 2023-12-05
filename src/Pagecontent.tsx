import {useContext} from 'react'
import { PokemonContext } from './PokemonContext';


const Pagecontent = () => {
    const {name, type, sprite} = useContext(PokemonContext)
    return (
        <div className="page-content">
            <h2> {PokemonContext.Provider.name} </h2>
            <a href=""><img style={{ width: 40, height: 40 }} src = {sprite} /></a>
        </div>
      );
}
 
export default Pagecontent;