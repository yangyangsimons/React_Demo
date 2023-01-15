import React from "react"
import heroImage from "../images/Group.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={heroImage} />
            <div className="content">
                <h1>Online Experiences</h1>
                <span>Join unique interactive activities led 
                    by one-of-a-kind hosts—all without leaving home.
                </span>

            </div>
        </div>


    )
}
