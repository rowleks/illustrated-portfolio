import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)


  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src="./logo-blk.png" alt="logo" />
            <span>Personal</span>
        </div>

        <div className="nav-menu">
          <span className="nav-links">About Me</span>
          <span className="nav-links">Skills</span>
          <span className="nav-links">Project</span>
          <span className="nav-links">Contact Me</span>
        </div>

        <div className="resume-btn">
          <span>Resume</span>
          <img src="download-icon.png" alt="" />
        </div>

        <img onClick={toggleNav} className="nav-ham" src="hamburger.png" alt="hamburger" />

        <div className={`ham-menu ${open ? "open": ""}`}>
          <span className="nav-links">About Me</span>
          <span className="nav-links">Skills</span>
          <span className="nav-links">Project</span>
          <span className="nav-links">Contact Me</span>

        </div>
      
    </nav>
  )
}

export default Navbar
