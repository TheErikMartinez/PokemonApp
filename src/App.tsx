import Navbar from "./Navbar"
import Searchbar from './Searchbar'
import Pagecontent from "./Pagecontent";

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <div className='search'> 
        <Searchbar />
        </div>
        <div className= 'content'>
         { <Pagecontent /> }
        </div>
      </div>
    </>
  )
}

export default App
