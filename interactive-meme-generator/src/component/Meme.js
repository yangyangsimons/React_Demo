import React from "react"
import memesData from "../memesData"

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState('')

    function getNewImage(e){
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(preMemeImage => {
            preMemeImage = url
            return preMemeImage
        })

    } 
    return (
        <main>
            <form className="form">
                <input type="text" className="form--inputs"/>
                <input type="text" className="form--inputs"/>
                <button className="form--button" onClick={getNewImage}>Get a new meme image  🖼</button>
            </form>
            <div className="">
                <img src={memeImage}/>
            </div>
        </main>

    ) 
}