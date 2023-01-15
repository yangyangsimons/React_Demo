import React from "react"
import sport from "../images/image12.png"
import wedding from "../images/wedding-photography.png"
import bike from "../images/mountain-bike.png"
import star from "../images/Star.png"

export default function Card() {
    return (
        <div className="cardContainer">
            <img src={sport} className="cardImage"/>
            <div className="cardStatus">
                <img src={star} className="img--star"/>      
                <span> 5.0 </span>
                <span className="gray"> (6) · </span>
                <span className="gray"> USA </span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p> <span className="bold">From $136 </span> / person</p>
        </div>
    )
}