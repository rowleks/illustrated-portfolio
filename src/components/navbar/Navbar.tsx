import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  const closeNav = () => setOpen(false)


  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <AnchorLink href="/"> <img src="./logo-blk.png" alt="logo" /></AnchorLink>
            <span>Personal</span>
        </div>

        <div className="nav-menu">
          <AnchorLink onClick={closeNav} href="#about"> <span className="nav-links">About Me</span></AnchorLink> 
          <AnchorLink onClick={closeNav} href="#skills"> <span className="nav-links">Skills</span> </AnchorLink>
          <AnchorLink onClick={closeNav} href="#projects"> <span className="nav-links">Project</span> </AnchorLink>
          <AnchorLink onClick={closeNav} href="#contact"> <span className="nav-links">Contact Me</span></AnchorLink>
          
        </div>

        <div className="resume-btn">
          <span>Resume</span>
          <img src="download-icon.png" alt="" />
        </div>

        <img onClick={toggleNav} className="nav-ham" src="hamburger.png" alt="hamburger" />

        <div className={`ham-menu ${open ? "open": ""}`}>
        <AnchorLink onClick={closeNav} href="#about"> <span className="nav-links">About Me</span></AnchorLink> 
          <AnchorLink onClick={closeNav} href="#skills"> <span className="nav-links">Skills</span> </AnchorLink>
          <AnchorLink onClick={closeNav} href="#projects"> <span className="nav-links">Project</span> </AnchorLink>
          <AnchorLink onClick={closeNav} href="#contact"> <span className="nav-links">Contact Me</span></AnchorLink>
        </div>
      
    </nav>
  )
}

export default Navbar
