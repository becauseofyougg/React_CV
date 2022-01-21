import { useState } from "react";
import "./header.scss";

export default function Header() {

  const [active, setActive] = useState(false)
  
  
  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className={active ? "header active" : "header" }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            dimanche
          </a>
          
        </div>
        <div className="right">
        <nav className={active ? "navbar active" : "navbar" }>
          <ul>
            <li><a href="#intro" onClick={() => setActive(false)}>Home</a></li>
            <li><a href="#main" onClick={() => setActive(false)}>About me</a></li>
            <li><a href="#skills" onClick={() => setActive(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActive(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setActive(false)}>Contact</a></li>  
          </ul>
        </nav>
          <div className="hamburger" onClick={showMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}