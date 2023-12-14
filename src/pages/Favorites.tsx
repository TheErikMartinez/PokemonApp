import FavoritePokemons from "../FavoritePokemons"
import Navbar from "../Navbar"


function Favorites() {
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="Favorites">
          <FavoritePokemons />
          </div>
        </div>
      </>
    )
  }
  
  export default Favorites