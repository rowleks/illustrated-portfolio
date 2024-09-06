import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src="./logo-blk.png" alt="logo" />
            <span>Personal</span>
        </div> 
        <img className="nav-ham" src="hamburger.png" alt="hamburger" />
      
    </nav>
  )
}

export default Navbar
