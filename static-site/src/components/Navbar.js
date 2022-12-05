import React from "react"
import reactLogo from "../images/logo.png"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src={reactLogo} />
            <h1>ReactFacts</h1>
            <h2>ReactCourse - project1</h2>
        </nav>
    )
}