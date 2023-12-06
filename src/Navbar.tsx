const Navbar = () => {
    
    return ( 
       <nav className="navbar">
        <h1><img style={{ width: 110, height: 70 }} src="images/Pokemon-Logo.png" /></h1>
        <div className="buttons">
            <a href="/"><img style={{ width: 40, height: 40 }} src="images/Search.png" /></a>
            <a href="/favorites"><img style={{ width: 40, height: 40 }} src="images/Star.png" /></a>
        </div>
       </nav> 
     );
}
 
export default Navbar ;