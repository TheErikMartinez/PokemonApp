import { Link } from "react-router-dom";

const Navbar = () => {
    
    return ( 
       <nav className="navbar">
        <h1><img style={{ width: 110, height: 70 }} src="images/Pokemon-Logo.png" /></h1>
        <div className="buttons">
            <Link to="/"><img style={{ width: 40, height: 40 }} src="images/Search.png" /></Link>
            <Link to="/favorites"><img style={{ width: 40, height: 40 }} src="images/Star.png" /></Link>
        </div>
       </nav> 
     );
}
 
export default Navbar ;