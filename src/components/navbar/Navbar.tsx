import { useState, useEffect, useCallback } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNav = () => setOpen(!open);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar on scroll down
    } else {
      setShowNavbar(true); // Show navbar on scroll up
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Add lastScrollY as a dependency

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar); // Clean up event listener
    };
  }, [controlNavbar]); // Add controlNavbar as a dependency

  return (
    <nav className={`navbar ${showNavbar ? "active" : "hidden"}`}>
      <AnchorLink href="#heros">
        <div className="navbar-logo">
        <img src="./logo-blk.png" alt="logo" />
        <span>Personal</span>
      </div> </AnchorLink>

      <div className="nav-menu">
        <AnchorLink href="#about">
          <span className="nav-links">About Me</span>
        </AnchorLink>
        <AnchorLink href="#skills">
          <span className="nav-links">Skills</span>
        </AnchorLink>
        <AnchorLink href="#projects">
          <span className="nav-links">Project</span>
        </AnchorLink>
        <AnchorLink href="#contact">
          <span className="nav-links">Contact Me</span>
        </AnchorLink>
      </div>

      <div className="resume-btn">
        <span>Resume</span>
        <img src="download-icon.png" alt="" />
      </div>

      <img onClick={toggleNav} className="nav-ham" src="hamburger.png" alt="hamburger" />

      <div className={`ham-menu ${open ? "open" : ""}`}>
        <AnchorLink href="#about">
          <span className="nav-links">About Me</span>
        </AnchorLink>
        <AnchorLink href="#skills">
          <span className="nav-links">Skills</span>
        </AnchorLink>
        <AnchorLink href="#projects">
          <span className="nav-links">Project</span>
        </AnchorLink>
        <AnchorLink href="#contact">
          <span className="nav-links">Contact Me</span>
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Navbar;
