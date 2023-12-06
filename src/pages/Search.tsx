import Navbar from "../Navbar"
import Pagecontent from "../Pagecontent"
import Searchbar from "../Searchbar"

function Search() {
    return (
      <>
        <div className='App'>
          <Navbar />
          <div className='search'> 
          <Searchbar />
          </div>
          <div className= 'content'>
          <Pagecontent />
          </div>
        </div>
      </>
    )
  }
  
  export default Search