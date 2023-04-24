import React from "react"
import ReactDOM from "react-dom"

export default function Header(){
    return (
      <header>
        <nav className = "nav">
          <img src="./logo192.png" className = "logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
  
      </header>
    )
}