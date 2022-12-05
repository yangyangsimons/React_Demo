import React from "react"
import ReactDom from "react-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import reactLogo from "./images/logo.png"

export default function Page () {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}