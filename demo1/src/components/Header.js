import React from "react"
import reactLogo from "../images/logo192.png"

export default function Header(){
    return (
      <header>
        <nav className = "nav">
          <img src={reactLogo} className = "logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
  
      </header>
    )
}